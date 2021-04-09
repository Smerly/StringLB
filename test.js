const fb = require('./script');

test('upperFirst', () => {
	expect(fb.upperFirst('hello')).toBe('Hello');
});

test('removeExtraSpaces', () => {
	expect(fb.removeExtraSpaces('   Hello    world!   ')).toBe('Hello world!');
});

test('allCaps', () => {
	expect(fb.allCaps('foobar')).toBe('FOOBAR');
});

test('capitalizeWords', () => {
	expect(fb.capitalizeWords('hello world')).toBe('Hello World');
});

test('removeExtraSpaces', () => {
	expect(fb.removeExtraSpaces('   Hello    world!   ')).toBe('Hello world!');
});

test('kebabCase', () => {
	expect(fb.kebabCase('hello world foo bar')).toBe('hello-world-foo-bar');
});

test('snakeCase', () => {
	expect(fb.snakeCase('hello world foo bar')).toBe('hello_world_foo_bar');
});

test('camelCase', () => {
	expect(fb.camelCase('hello world foo bar')).toBe('helloWorldFooBar');
});

test('shift', () => {
	expect(fb.shift('hello world')).toBe('ello worldh');
});
