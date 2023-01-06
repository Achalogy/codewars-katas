class PaginationHelper {
  collection = Array
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = [...collection]
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length
	}
	pageCount() {
	// returns the number of pages
    this.pageCount = Math.ceil(this.collection.length / this.itemsPerPage)
    return this.pageCount
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range

    const sliced = this.collection.slice(
      this.itemsPerPage * pageIndex,
      this.itemsPerPage * (pageIndex + 1)
    ).length;

    return !(sliced && pageIndex >= 0) ? -1 : sliced

	}
	pageIndex(itemIndex) {
    return this.collection.length > itemIndex && itemIndex >= 0
      ? (itemIndex / this.itemsPerPage) << 0
      : -1;
	}
}
