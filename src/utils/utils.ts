export function getCroppedThumbnailUrlWithFormat(
  originalUrl: string,
  width: number,
  height: number,
  format: "webp" | "jpg" = "webp"
): string {
  const uploadSegment = "/upload/";

  const index = originalUrl.indexOf(uploadSegment);
  if (index === -1) {
    throw new Error("Invalid Cloudinary URL");
  }

  const before = originalUrl.substring(0, index + uploadSegment.length);
  const after = originalUrl.substring(index + uploadSegment.length);

  const transformation = `c_fill,w_${width},h_${height},f_${format}/`;

  return before + transformation + after;
}


export function getUrlWithFormat(
  originalUrl: string,
  format: "webp" | "jpg" = "webp"
): string {
  const uploadSegment = "/upload/";

  const index = originalUrl.indexOf(uploadSegment);
  if (index === -1) {
    throw new Error("Invalid Cloudinary URL");
  }

  const before = originalUrl.substring(0, index + uploadSegment.length);
  const after = originalUrl.substring(index + uploadSegment.length);

  const transformation = `f_${format}/`;

  return before + transformation + after;
}