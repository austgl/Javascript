/* PublicLibrary class, with hard-coded catalogs for genre. */

var PublicLibrary = function(books) { // implements Library
  this.catalog = {};
  this.biographyCatalog = new BiographyCatalog();
  this.fantasyCatalog = new FantasyCatalog();
  this.mysteryCatalog = new MysteryCatalog();
  this.nonFictionCatalog = new NonFictionCatalog();
  this.sciFiCatalog = new SciFiCatalog();

  for(var i = 0, len = books.length; i < len; i++) {
    this.addBook(books[i]);
  }
};
PublicLibrary.prototype = {
  findBooks: function(searchString) { ... },
  checkoutBook: function(book) { ... },
  returnBook: function(book) { ... },
  // 这里需要分别对每个图书分类调用handleFilingRequest方法
  // 如果想增加更多图书类别那就需要修改构造函数和addBook方法这两处的代码。
  addBook: function(newBook) {
    // Always add the book to the main catalog.
    this.catalog[newBook.getIsbn()] = { book: newBook, available: true };

    // Try to add the book to each genre catalog.
    this.biographyCatalog.handleFilingRequest(newBook);
    this.fantasyCatalog.handleFilingRequest(newBook);
    this.mysteryCatalog.handleFilingRequest(newBook);
    this.nonFictionCatalog.handleFilingRequest(newBook);
    this.sciFiCatalog.handleFilingRequest(newBook);
  }
};
