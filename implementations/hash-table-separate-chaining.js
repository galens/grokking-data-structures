class Record {
  constructor(key, title, placement_info) {
    this.Key = key;
    this.Title = title;
    this.PlacementInfo = placement_info;
  }
}

class HashTable {
  constructor(size) {
    this.max_length = size;
    this.buckets = new Array(size).fill().map(() => []);
  }

  H(key) {
    return key % this.max_length;
  }

  Insert(item) {
    const index = this.H(item.Key);

    // Traverse the chain at the index
    for (const record of this.buckets[index]) {
      if (record.Key === item.Key) {
        return false; // Key already exists in the chain, cannot insert
      }
    }

    this.buckets[index].push(item);
    return true;
  }

  Search(key, returnedItem) {
    const index = this.H(key);

    // Traverse the chain at the index
    for (const record of this.buckets[index]) {
      if (record.Key === key) {
        returnedItem.Key = record.Key;
        returnedItem.Title = record.Title;
        returnedItem.PlacementInfo = record.PlacementInfo;
        return true; // Return true to indicate the record was found
      }
    }

    return false; // Record not found
  }

  Delete(key) {
    const index = this.H(key);

    // Traverse the chain at the index
    const chain = this.buckets[index];
    for (let i = 0; i < chain.length; i++) {
      const record = chain[i];
      if (record.Key === key) {
        chain.splice(i, 1);
        return true;
      }
    }

    return false; // The key is not found in the chain
  }

  ShowTable() {
    console.log('Index\tValue (Key, Title, PlacementInfo)');
    for (let i = 0; i < this.max_length; i++) {
      process.stdout.write(i + '\t');
      const chain = this.buckets[i];
      if (chain.length === 0) {
        console.log('[EMPTY BUCKET]');
      } else {
        for (let j = 0; j < chain.length; j++) {
          const record = chain[j];
          if (j > 0) {
            process.stdout.write('--> ');
          }
          process.stdout.write(
            '(' +
              record.Key +
              ', ' +
              record.Title +
              ', ' +
              record.PlacementInfo +
              ')'
          );
        }
        console.log();
      }
    }
  }
}

// The driver code
function main() {
  const tableSize = 11;
  const hashTable = new HashTable(tableSize);

  // Insert initial book information
  hashTable.Insert(new Record(1701, 'Internet of Things', 'G1 Shelf'));
  hashTable.Insert(new Record(1712, 'Statistical Analysis', 'G1 Shelf'));
  hashTable.Insert(new Record(1718, 'Grid Computing', 'H2 Shelf'));
  hashTable.Insert(new Record(1735, 'UML Modeling', 'G1 Shelf'));
  hashTable.Insert(new Record(1752, 'Professional Practices', 'G2 Shelf'));

  // Display the hash table after initial insertions
  console.log('\nHash Table after initial insertions:');
  hashTable.ShowTable();

  // Insert the following record
  hashTable.Insert(new Record(1725, 'Deep Learning with Python', 'C3 Shelf'));

  // Display the hash table after the last insertion
  console.log('\nHash Table inserting Book Key 1725:');
  hashTable.ShowTable();

  // Delete two records
  hashTable.Delete(1701);
  hashTable.Delete(1718);

  // Display the hash table after deletions
  console.log('\nHash Table after deleting 1701 and 1718:');
  hashTable.ShowTable();
}

main();
