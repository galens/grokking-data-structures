function stringify(data) {
  if (typeof data === 'string') {
    return `"${data}"`;
  }
  if (typeof data === 'undefined' || data === null) {
    return 'null';
  }
  if (typeof data === 'number' || typeof data === 'boolean') {
    return String(data);
  }
  if (Array.isArray(data)) {
    const temp = data.map(stringify);
    return `[${temp.join(',')}]`;
  }
  if (data instanceof Date) {
    return `"${data.toISOString()}"`;
  }
  if (typeof data === 'object') {
    const temp = Object.entries(data).map(
      ([key, value]) => `"${key}":${stringify(value)}`
    );
    return `{${temp.join(',')}}`;
  }
  throw new Error('unsupported');
}

const obj = {
  name: 'bill',
  age: 33,
  city: 'new york',
};

console.log(stringify(obj));
