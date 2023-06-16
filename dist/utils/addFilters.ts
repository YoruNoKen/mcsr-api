export function addFilters(match_type: string | number, page: string | number, count: string | number) {
  let _filter = "";
  if (match_type !== undefined) {
    _filter += `&filter=${match_type}`;
  }
  if (page !== undefined) {
    _filter += `&page=${page}`;
  }
  if (count !== undefined) {
    _filter += `&count=${count}`;
  }
  _filter = _filter.replace(/^&/, "?");
  return _filter;
}
