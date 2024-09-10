class LexicalAnalyzerModel1 {
    constructor() {
        this.tokenTypes = {
            Keyword: 'Keyword',
            Identifier: 'Identifier',
            Literal: 'Literal',
            Symbol: 'Symbol'
        };
    }

    classifyTokens(tokens) {
        const classifiedTokens = [];
        for (const token of tokens) {
            if (token === 'declare') {
                classifiedTokens.push({ token: token, value: this.tokenTypes.Keyword });
            } else if (token.match(/^[a-zA-Z]+$/)) {
                classifiedTokens.push({ token: token, value: this.tokenTypes.Identifier });
            } else if (token.match(/^\d+$/)) {
                classifiedTokens.push({ token: token, value: this.tokenTypes.Literal });
            } else if (token.match(/^[=+]$/)) {
                classifiedTokens.push({ token: token, value: this.tokenTypes.Symbol });
            }
        }

        return classifiedTokens;
    }
}

module.exports = LexicalAnalyzerModel1;