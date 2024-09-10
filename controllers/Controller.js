const LexicalAnalyzerModel1 = require("../models/firstModel");
const LexicalAnalyzerModel2 = require("../models/secondModel");

const userView = (req, res) => {
  res.render("main");
};

const firstmodelView = (req, res) => {
  res.render("firstModel");
};

const secondmodelView = (req, res) => {
  res.render("secondModel");
};

const firstmodelsubmit = (req, res) => {
  const sourceCode = req.body.code;
  const lines = sourceCode.split('\n'); // เเยกบรรทัด
  const tokens = [];

  for (let line of lines) {
    if (!line.trim().startsWith('//')) { // ถ้าไม่ได้ขึ้นต้นด้วย // Push ไปที่ Token

      const lineTokens = line.split(/\s+/);
      tokens.push(...lineTokens);
    }
  }

  const model = new LexicalAnalyzerModel1(); // ใช้ model 1

  const classifiedTokens = model.classifyTokens(tokens);
  let resultString = "";

  classifiedTokens.forEach((token) => {
    resultString += `${token.token} is ${token.value}\n`;
  });

  res.render('resultView', { result: resultString });
};

const secondmodelsubmit = (req, res) => {
  const sourceCode = req.body.code;
  const lines = sourceCode.split('\n');
  const tokens = [];

  for (let line of lines) {
    if (!line.trim().startsWith('//')) {

      const lineTokens = line.split(/\s+/);
      tokens.push(...lineTokens);
    }
  }
  const model = new LexicalAnalyzerModel2();// ใช้ model 2

  const classifiedTokens = model.classifyTokens(tokens);
  let resultString = "";

  classifiedTokens.forEach((token) => {
    resultString += `${token.token} is ${token.value}\n`;
  });

  res.render('resultView', { result: resultString });
};

module.exports = {
  userView,
  firstmodelView,
  secondmodelView,
  firstmodelsubmit,
  secondmodelsubmit
};
