import test from 'ava';
import formatReadingTime from '.';

test('main', t => {
	t.is(formatReadingTime(1), '☕ 1 min read');
	t.is(formatReadingTime(4), '☕ 4 min read');
	t.is(formatReadingTime(10), '☕☕ 10 min read');
	t.is(formatReadingTime(16), '☕☕☕ 16 min read');
	t.is(formatReadingTime(22), '☕☕☕☕ 22 min read');
	t.is(formatReadingTime(24), '☕☕☕☕☕ 24 min read');
	t.is(formatReadingTime(37), '🍱🍱🍱🍱 37 min read');
	t.is(formatReadingTime(40), '🍱🍱🍱🍱 40 min read');
	t.is(formatReadingTime(49), '🍱🍱🍱🍱🍱 49 min read');
});

test('custom emoji', t => {
	t.is(formatReadingTime(10, {short: '🍰', long: '🎂'}), '🍰🍰 10 min read');
	t.is(formatReadingTime(50, {short: '🍰', long: '🎂'}), '🎂🎂🎂🎂🎂 50 min read');
});

test('custom `base` value', t => {
	t.is(formatReadingTime(1, {base: 3}), '☕ 1 min read');
	t.is(formatReadingTime(4, {base: 3}), '☕ 4 min read');
	t.is(formatReadingTime(5, {base: 3}), '☕☕ 5 min read');
	t.is(formatReadingTime(9, {base: 3}), '☕☕☕ 9 min read');
	t.is(formatReadingTime(12, {base: 3}), '🍱🍱 12 min read');
	t.is(formatReadingTime(18, {base: 3}), '🍱🍱🍱 18 min read');
});
