const vision = require('@google-cloud/vision');

const CREDENTAILS = JSON.parse(
  JSON.stringify({
    type: 'service_account',
    project_id: 'manifest-pride-394616',
    private_key_id: 'c47426d4e19a0b7816ded8f6e310d5a5cae83a6c',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC7/L4wRT69L7fE\naiPiDn0uYC5MqJF3e3RJlF6ejfgTE+So0QPlK4/pH4V7qOWIzP0VFE8hR8p0arhc\nEBf7AUZ6o6dox0fq+3Q5+eHclRU/yVJ542zUcjhU7s+ynFBjC8Tq7gSgb1SMGA7a\n1sPgPtZ9ogZnyyGTbmZbzRM+oY8qf8GKCTPWPjTI7i+4uX2ARuEptR4836WBB2KO\n3yvUl2QOcKOWNFaUe6pESVdCamngI6eYBhZKKEx1ydCPoy3PpIZ8gxbkkh0HRyWj\nYNdXx/ArujNZNmmXU41STLPF6fSKIOCI/DLk0fFyi88/dZ5BIAwFn96jif91lXph\npaO8ol+/AgMBAAECggEAALZwXDDqO2iHetLL5mDvpNnWdCKHH3qU0g+0j65k1wtW\nVWAgVLm1Zv06E48IZqOyBC5KtFkYHFe99Nq3GisQJ2UxNcqgcRx1iQ85U/SSawSV\nhxNtabfOF/gFpEnz/5Gh32RVpMQcRFoO0JEJOgkf1OVoJdySGhYNNM6TMvcwNE5n\nlpZkf57XtApjqfB9P3ucQmtfus+rQOuDZQWGLgZO5lVX0oD3wh08/KrLX9N4WFC7\nkSq9qGmKmF8I9SEZNvZRihiQ4gUww+F/9cbTEzw+hETR2RuK+KtappzmcGBzbtry\n7OlDW+gRcC/PXf1gOP90IKl6i/S013Nk3UD/xX8HVQKBgQDiklc8OaD+y3y9U4Kd\nxkkO1+xk+fAQhlfCXH908UPvYO3Q5C59vzWm2s+1a8yPF5KDf18j3el0yZD/q/Y2\nGZsIKyNiiM07KqrKKHK7MpVD4fFqbQbpATTq9AfTTKn2501HspqfiybxLMkPub20\nZ5X9JwApqhBgH0uoMQz3x/5S9QKBgQDUZ3Ix3ND4+BT+5KNw8o/Jryv9Z5sffvpE\nLLCnbANbVzkF0wtnnnxFwzzgV0TKOwBe+qkpWCzIYxqFqWaIZ+gmrNLGrtWcGkgt\nCqNdaCHjCHL5Zj1FZO8j6TnzYmueB2luYyuoBjbLC3mRYYEmiEp3PD85L9ogVgMb\nuxkVdKY/YwKBgAryAuDX790fO3Fx/Vdd4t2itLrUEDLcKpUrHsUpepyv1A1JWK2e\ndRsQawRaptEq1Fsh5hi3ebW4nxaa2hQW/JRScS0raq63CvUlKxW8BdX3rk/z4GeV\nNVc8XrxocbWJywPxruKSOFliTnxB/tYeQvKt1aYtnwjluiPv6q51rOWZAoGANApY\nX0Ej7iwSMNVh+hVkB10k4QRWbGQW+0cbzRlYxTNcpEGuBKg++HS6YJjhIM9N6vdt\nJNUWu84UPHVhyr/ykC89wTIq4gFKd8aoegU+cDqsuNBE6NCvCtRkv234whI80a/4\njUVgfWUFVwpVs1QnMomPT/qabdvFDTFNFwWqidMCgYBwTVZf83nnZgWyzatkhzk1\nKi46C1L6h6qIlAuzm/1ma9r2XGVcGUowSWlofOZ3fgJBzPwK0PfgPeGz2leefGzl\ngG6FoWTA4qsAlZnQgthbjSmSGHi6XlNtTLzNMdkM8IkicEl779lU7fWISQzVwMQK\nfXSBeqHIazNQ8nBIOfLRLQ==\n-----END PRIVATE KEY-----\n',
    client_email: 'test-86@manifest-pride-394616.iam.gserviceaccount.com',
    client_id: '116785463855450458942',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/test-86%40manifest-pride-394616.iam.gserviceaccount.com',
    universe_domain: 'googleapis.com',
  })
);

const CONFIG = {
  Credentials: {
    private_key: CREDENTAILS.private_key,
    client_email: CREDENTAILS.client_email,
  },
};

// const client = new vision.ImageAnnotatorClient(CONFIG);

const client = new vision.ImageAnnotatorClient({
  keyFilename: 'key.json',
});

// Performs label detection on the image file
client
  .textDetection('./jdmtext.jpg')
  .then((results) => {
    const text = results[0].textAnnotations;

    text.forEach((label) => console.log(label.text));
    console.log(results);
  })
  .catch((err) => {
    console.error('ERROR:', err);
  });

// const Ocr = () => {
//   return <></>;
// };
// export default Ocr;
