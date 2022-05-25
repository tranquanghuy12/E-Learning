export const regexFileExtension = (fileName) => {
  var extension = /^.+\.([^.]+)$/.exec(fileName);
  return extension == null ? "" : extension[1];
};
