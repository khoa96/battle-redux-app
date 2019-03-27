export default function errorHandler(code) {
  switch (code) {
    case 401:
      console.log('error')
      break;
    case 400:
      console.log('error');
      break;
    case 403:
      console.log('error');
      break;
    case 404:
      console.log('error')
      break;
    default:
      break;
  }
}
