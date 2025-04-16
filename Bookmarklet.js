const encryptedFlag = "àÒÆÞ¦È¬ëÙ£ÖÓÚåÛÑ¢ÕÓ¨ÍÕÄ¦í";
const key = "picoctf";
let decryptedFlag = "";

for (let i = 0; i < encryptedFlag.length; i++) {
    decryptedFlag += String.fromCharCode(
        (encryptedFlag.charCodeAt(i) - key.charCodeAt(i % key.length) + 256) % 256
    );
}

console.log("Decrypted flag:", decryptedFlag);

