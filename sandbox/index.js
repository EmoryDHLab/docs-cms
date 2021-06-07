import {getDoc, parseDoc} from "parse-google-docs";

import * as fs from "fs";
const config =
  {
    "type": "service_account",
    "project_id": "cms-testing-315216",
    "private_key_id": "fc774e11f2d8666a68b673bb884fb0a8759b75d4",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWrtwiSr6ihZF7\nt1hYpv7f8/3Q0iK4jU5jtXaSB/2CwcXc7ypL4+2nbgRrksX61OKsQahfT4Wcfbkx\npPFIUba669cCD2jS/Wmw1a+ZRgVRxN+D4VjUl7Nw5OpXYVGcJrhs9gwYRLuAcaVy\nBerkS8C+Mk+kfoaxRyWlLVPadAfeO3GStTLUx7gQb+Gr/2lY2dIXNR7RqEMKUKvC\ncrip8zyI4sPSdK8k1a87M1ijeyb0OOqEdWEIW7H2K/8meqU/r+6Ck4Rf6/Na15Vt\nOO1jDXGBnMvRC01teI6Fxp7+hy+2CQoOPJ19wDwQfJdVzxtrZnGMzPU90Zpga5vi\nge/rqXenAgMBAAECggEAR6u8QQNUUXE+lZ3Lg79Kk7M2EtEgeq+bjYmOcD8kscEB\nH+kSMS6kp3KI37HcQUZo2o4QS+VDJAAYyiguK7vSMm5iwjQaI+EtGFNLRpgrh40g\n01WoLtZJH3WCkTVU3/T627jcX96xYJKtouJ1q0js0IqVnyQfZMr2eO5qaAmwhF7+\nYAfqW4rxCvb3jBBnVzLPeL5dfFbmhHEULO5mJ/B3dLc5CLsALtQq9keFPp5fRUoU\nG/eTn3358nrX9nlfk8eg2UK+hcuOUBaGbrke+UxcMrvcIeMt9WVlHSYJdLBMaUrY\nn/AT+T2RzQdupq3u9A9/PuG0lyoZth5rG1XfQDWaIQKBgQDU5YX+nprygQnz+pUv\nIoMp6a1yPZ95HevlIzfdm3Yee8oqoBDv8pa6sj2bRDjPe7Ofzi/R7VJ62Chji2lX\nb/d6BvnGntK9oalVy+K5R96RHSkrNBp95WiZ4jykXcrUReMtcbxHljEE+mVUPHkx\n4U2ukPFns3hkfxmbfBOWGiq0KwKBgQC1MMumG2Q3uyd+LN2Z+Sd2YYQ04i5pUSXc\n8Yfle9MoD4mvw+HI56QFGql/sfIbQnBBoOv6/h1n/omMz/pbmVPUj86ABlRF9EVa\nsDiwuBztmwPZIi+WmQSq3qShvwq6bVybYZhyvGorEx/ORF1B21CL8MeEy5ED8kUU\n2exw1D9gdQKBgBtFZ3utP3Xu96JsJ+4Iwrp8t34ZzLLMFWqdr0tQ3bmb69K3/FNw\nRMSXjnK0M37IfsLqu49tkhIwXEQcGJtduVrFR/ucXqxx5+oYmutW/HikPqDNJNOZ\nrmN/6nq3lQLKDQbGOfMFlzPnC1HWCURNcxD4eiPphnOBIHudUjj5Ex1PAoGAI0y+\nYD416CWuLAbRpY3FAms9NpBaOmp01fa4Yx0cplFgob2n31xBuDzZiOdCI81t0Vto\nnh2j3P7aDXT3caENk/vwX0DcakSMvn5WjRdRi3kH5uWiH9Tv89oseNafYHKt+Ber\ne675gCrZp3XqNUplBt6CAH0oY3xvuQA78D9pmYECgYEAu95mfM9zpGHsmSKzOKPj\nRiMYnoZxa1DrC/fShZoXsIynY6/6hdUvGLorORTzZULoIZuypmBg1xaEEei4Mipa\n0L7aYe05aQ2/JVdv3dctdYV9S99L+Ee+wlaoxVYsAwkMNP3NAGrhpadHzDrOIxSw\na7Ghwaf15BT9A693QSl3Qf4=\n-----END PRIVATE KEY-----\n",
    "client_email": "docs-cms@cms-testing-315216.iam.gserviceaccount.com",
    "client_id": "104347215112211746817",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/docs-cms%40cms-testing-315216.iam.gserviceaccount.com"
  }

const testFile = "13CmnM9JAJJoDsVjPR79og0JTORlUISyAzhxo1K-UeTU"

const doc = await getDoc(config, testFile);
const parsed = parseDoc(doc);
console.log(parsed);
fs.writeFileSync('./processed.json', JSON.stringify(parsed, null, 2) , 'utf-8');
