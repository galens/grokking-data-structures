class Record {
  // Represents a record with Key, Title, and PlacementInfo properties
  constructor(key = -1, title = '', placement_info = '') {
    this.Key = key; // Record key
    this.Title = title; // Record title
    this.PlacementInfo = placement_info; // Record placement info
  }
}

class HashTable {
  // Represents a hash table to store records
  constructor(size) {
    this.HT_array = new Array(size).fill(null); // Array to store records
    this.max_length = size; // Maximum number of elements the hash table can store
    this.length = 0; // Total records present in the hash table
  }

  H(key) {
    // The hash function to calculate the index for a given key
    return key % this.max_length;
  }

  Insert(item) {
    // Inserts a record into the hash table
    if (this.length == this.max_length) {
      console.error('Hash table is full. Cannot insert the key-value pair.');
      return false; // Cannot insert when the hash table is full
    }

    const index = this.H(item.Key); // Calculate the index using the hash function
    this.HT_array[index] = item; // Insert the record at the calculated index
    this.length++; // Increment the total record count
    return true;
  }

  Search(key, returnedItem) {
    // Searches for a record with the given key in the hash table
    const index = this.H(key); // Calculate the index using the hash function

    if (this.HT_array[index] == null || this.HT_array[index].Key == -1) {
      return false; // Record not found
    }

    returnedItem.Key = this.HT_array[index].Key; // Assign the found record to the returnedItem parameter
    returnedItem.Title = this.HT_array[index].Title;
    returnedItem.PlacementInfo = this.HT_array[index].PlacementInfo;
    return true; // Return true to indicate the record was found
  }

  Delete(key) {
    // Deletes a record with the given key from the hash table
    const index = this.H(key); // Calculate the index using the hash function

    if (this.HT_array[index] != null && this.HT_array[index].Key == key) {
      this.HT_array[index].Key = -1; // Mark the slot as empty
      this.length--; // Decrement the total record count
      return true; // Record deleted successfully
    }

    return false; // The slot is already empty or there is a different item at the slot
  }
}

// The driver code
const main = () => {
  const hashTable = new HashTable(10);

  // Insert book information
  hashTable.Insert(new Record(1001, 'Introduction to Programming', 'A2 Shelf'));
  hashTable.Insert(
    new Record(1002, 'Data Structures and Algorithms', 'B1 Shelf')
  );
  hashTable.Insert(new Record(1003, 'Database Management Systems', 'C3 Shelf'));

  // Retrieve book information
  const book = new Record();
  if (hashTable.Search(1001, book)) {
    console.log('Book Information for Key ' + book.Key + ':');
    console.log('Title: ' + book.Title);
    console.log('Placement Info: ' + book.PlacementInfo);
  } else {
    console.log('No book information found for Key 1001');
  }

  // Delete a book information
  hashTable.Delete(1001);

  // Retrieve the book status after deletion
  const bookAfterDeletion = new Record();
  if (hashTable.Search(1001, bookAfterDeletion)) {
    console.log('Book Information for Key ' + bookAfterDeletion.Key + ':');
    console.log('Title: ' + bookAfterDeletion.Title);
    console.log('Placement Info: ' + bookAfterDeletion.PlacementInfo);
  } else {
    console.log('No book information found for Key 1001');
  }
};

main();
