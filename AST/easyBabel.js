// 参考文章地址
// https://juejin.im/post/5c03b85ae51d450c740de19c

const tokenizer = require('./tokenizer');
const parser = require('./createAst');
const transformer = require('./transformer');
const generator = require('./generator');

const compiler = (input) => {
	const tokens = tokenizer(input);
	const ast =  parser(tokens);
	const newAst = transformer(ast);
	const output = generator(newAst);

	return output;
};

const str = 'const add = (a, b) => a + b';

const result = compiler(str);

console.log(result);