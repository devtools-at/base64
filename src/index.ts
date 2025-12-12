/**
 * Base64 Encoder/Decoder
 * Encode and decode Base64 strings with UTF-8 support
 *
 * Online tool: https://devtools.at/tools/base64
 *
 * @packageDocumentation
 */

function encodeBase64(str: string): string {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  // Convert Uint8Array to binary string
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decodeBase64(base64: string): string {
  // Validate base64 format
  const cleanBase64 = base64.replace(/\s/g, "");
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(cleanBase64) || cleanBase64.length % 4 !== 0) {
    throw new Error("Invalid base64 format");
  }

  let binary: string;
  try {
    binary = atob(cleanBase64);
  } catch {
    throw new Error("Invalid base64 encoding");
  }

  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  try {
    const decoder = new TextDecoder("utf-8", { fatal: true });
    return decoder.decode(bytes);
  } catch {
    throw new Error("Invalid UTF-8 encoding in decoded data");
  }
}

// Export for convenience
export default { encode, decode };
