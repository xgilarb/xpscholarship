document.addEventListener("DOMContentLoaded", function () {
  const toggleModeButton = document.createElement("button");
  toggleModeButton.className = "toggle-mode";
  toggleModeButton.innerHTML = '<span class="emoji">🌞</span>Light Mode';

  toggleModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const modeText = document.querySelector(".mode-text");
    if (document.body.classList.contains("dark-mode")) {
      modeText.innerText = "Dark Mode";
      toggleModeButton.innerHTML = '<span class="emoji">🌜</span>Dark Mode'; // Emoji bulan
    } else {
      modeText.innerText = "Light Mode";
      toggleModeButton.innerHTML = '<span class="emoji">🌞</span>Light Mode'; // Emoji matahari
    }
  });

  document.body.appendChild(toggleModeButton);

  const modeText = document.createElement("div");
  modeText.className = "mode-text";
  modeText.innerText = "Light Mode";
  document.body.appendChild(modeText);

  const books = [];
  const RENDER_EVENT = "render-book";
  const SAVED_EVENT = "saved-book";
  const STORAGE_KEY = "BOOKSHELF_APPS";

  const inputBookForm = document.getElementById("inputBook");
  const searchBookForm = document.getElementById("searchBook");

  inputBookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  searchBookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    searchBook();
  });

  function addBook() {
    const bookTitle = document.getElementById("inputBookTitle").value;
    const bookAuthor = document.getElementById("inputBookAuthor").value;
    const bookYear = parseInt(document.getElementById("inputBookYear").value); // Mengubah ke number
    const bookIsComplete = document.getElementById("inputBookIsComplete").checked;

    const generatedID = generateId();
    const bookObject = generateBookObject(
      generatedID,
      bookTitle,
      bookAuthor,
      bookYear,
      bookIsComplete,
    );

    console.log("Objek buku yang ditambahkan:", bookObject); // Cek Apakah year diubah ke number
    
    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function generateId() {
    return +new Date();
  }

  function generateBookObject(id, title, author, year, isComplete) {
    return {
      id,
      title,
      author,
      year,
      isComplete,
    };
  }

  function saveData() {
    if (isStorageExist()) {
      const parsed = JSON.stringify(books);
      localStorage.setItem(STORAGE_KEY, parsed);
      document.dispatchEvent(new Event(SAVED_EVENT));
    }
  }

  function isStorageExist() {
    if (typeof Storage === undefined) {
      alert("Browser kamu tidak mendukung local storage");
      return false;
    }
    return true;
  }

  document.addEventListener(RENDER_EVENT, function () {
    const incompleteBookList = document.getElementById("incompleteBookshelfList");
    const completeBookList = document.getElementById("completeBookshelfList");

    incompleteBookList.innerHTML = "";
    completeBookList.innerHTML = "";

    for (const bookItem of books) {
      const bookElement = makeBook(bookItem);
      if (!bookItem.isComplete) {
        incompleteBookList.append(bookElement);
      } else {
        completeBookList.append(bookElement);
      }
    }
  });

  function makeBook(bookObject) {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book_item");

    const textTitle = document.createElement("h3");
    textTitle.innerText = bookObject.title;

    const textAuthor = document.createElement("p");
    textAuthor.innerText = `Penulis: ${bookObject.author}`;

    const textYear = document.createElement("p");
    textYear.innerText = `Tahun: ${bookObject.year}`;

    const actionContainer = document.createElement("div");
    actionContainer.classList.add("action");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("red");
    deleteButton.innerText = "Hapus buku";
    deleteButton.addEventListener("click", function () {
      removeBook(bookObject.id);
    });

    if (bookObject.isComplete) {
      const undoButton = document.createElement("button");
      undoButton.classList.add("green");
      undoButton.innerText = "Belum selesai dibaca";
      undoButton.addEventListener("click", function () {
        undoBookFromCompleted(bookObject.id);
      });
      actionContainer.append(undoButton, deleteButton);
    } else {
      const completeButton = document.createElement("button");
      completeButton.classList.add("green");
      completeButton.innerText = "Selesai dibaca";
      completeButton.addEventListener("click", function () {
        addBookToCompleted(bookObject.id);
      });
      actionContainer.append(completeButton, deleteButton);
    }

    bookContainer.append(textTitle, textAuthor, textYear, actionContainer);

    return bookContainer;
  }

  function addBookToCompleted(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function undoBookFromCompleted(bookId) {
    const bookTarget = findBook(bookId);

    if (bookTarget == null) return;

    bookTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function removeBook(bookId) {
    const bookTarget = findBookIndex(bookId);

    if (bookTarget === -1) return;

    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  function findBook(bookId) {
    return books.find((book) => book.id === bookId);
  }

  function findBookIndex(bookId) {
    return books.findIndex((book) => book.id === bookId);
  }

  function searchBook() {
    const searchTitle = document.getElementById("searchBookTitle").value.toLowerCase();
    const incompleteBookList = document.getElementById("incompleteBookshelfList");
    const completeBookList = document.getElementById("completeBookshelfList");

    incompleteBookList.innerHTML = "";
    completeBookList.innerHTML = "";

    for (const bookItem of books) {
      if (bookItem.title.toLowerCase().includes(searchTitle)) {
        const bookElement = makeBook(bookItem);
        if (!bookItem.isComplete) {
          incompleteBookList.append(bookElement);
        } else {
          completeBookList.append(bookElement);
        }
      }
    }
  }

  function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(serializedData);

    if (data !== null) {
      books.push(...data);
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});
