class LexicalAnalyzerModel2 {
    constructor() {
        this.tokenTypes = {
            KeywordAndSign: 'Keyword and Sign',
            Variable: 'Variable',
            Integer: 'Integer',
            Assignment: 'Assignment'
        };
    }

    classifyTokens(tokens) {
        const classifiedTokens = [];

        for (const token of tokens) {
            if (token === 'declare') {
                classifiedTokens.push({ token: token, value: this.tokenTypes.KeywordAndSign });
            } else if (token.match(/^[a-zA-Z]+$/)) {
                classifiedTokens.push({ token: token, value: this.tokenTypes.Variable });
            } else if (token.match(/^\d+$/)) {
                classifiedTokens.push({ token: token, value: this.tokenTypes.Integer });
            } else if (token === '=') {
                classifiedTokens.push({ token: token, value: this.tokenTypes.Assignment });
            } else if (token === '+') {
                classifiedTokens.push({ token: token, value: this.tokenTypes.KeywordAndSign });
            }
        }

        return classifiedTokens;
    }
}

module.exports = LexicalAnalyzerModel2;