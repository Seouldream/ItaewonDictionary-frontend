export default function useConvertToHtml(element) {
  return <div dangerouslySetInnerHTML={{ __html: element }} />;
}
