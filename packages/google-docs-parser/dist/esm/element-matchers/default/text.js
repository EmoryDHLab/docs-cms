const htmlReplacements = {
    underline: text => `<u>${text}</u>`,
    italic: text => `<i>${text}</i>`,
    bold: text => `<b>${text}</b>`,
    strikethrough: text => `<s>${text}</s>`,
    link: (text, linkObj) => `<a href="${linkObj.url}">${text}</a>`
};
function processTextStyle(textStyle) {
    const css = {};
    const convertColor = (color) => {
        if (!color.color) {
            //"Fully transparent color". Not sure how this happens.
            return "rgb(255,255,255,0)";
        }
        const rgb = color.color.rgbColor;
        const toPercentage = (color) => {
            const decimal = color || 0;
            return decimal * 100 + '%';
        };
        return `rgb(${toPercentage(rgb.red)}, ${toPercentage(rgb.green)}, ${toPercentage(rgb.blue)})`;
    };
    if (textStyle === null || textStyle === void 0 ? void 0 : textStyle.foregroundColor) {
        css.color = convertColor(textStyle.foregroundColor);
    }
    if (textStyle === null || textStyle === void 0 ? void 0 : textStyle.backgroundColor) {
        css["background-color"] = convertColor(textStyle.backgroundColor);
    }
    if (textStyle === null || textStyle === void 0 ? void 0 : textStyle.weightedFontFamily) {
        const { fontFamily, weight } = textStyle.weightedFontFamily;
        if (fontFamily) {
            css["font-family"] = fontFamily;
            if (weight)
                css["font-weight"] = weight;
        }
    }
    if (textStyle === null || textStyle === void 0 ? void 0 : textStyle.fontSize) {
        css["font-size"] = textStyle.fontSize.magnitude + textStyle.fontSize.unit;
    }
    return css;
}
export const textRunMatcher = {
    matchProperty: "textRun",
    resolve(object, parseChild) {
        const text = object;
        if (!text.content)
            return false;
        const textStyle = text.textStyle;
        let html = text.content;
        if (!textStyle)
            return html;
        Object.keys(htmlReplacements).forEach(key => {
            if (key in textStyle) {
                // @ts-ignore
                html = htmlReplacements[key](html, textStyle[key]);
            }
        });
        const css = processTextStyle(textStyle);
        const hasCSS = Object.keys(css).length;
        if (!hasCSS)
            return html;
        return {
            type: "styledText",
            html,
            css
        };
    }
};
//# sourceMappingURL=text.js.map