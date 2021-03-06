module.exports = function(e) {
    var t = {
        keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",
        constant: "true false iota nil",
        typename: "bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
        built_in: "append cap close complex copy imag len make new panic print println real recover delete"
    };
    return {
        aliases: [ "golang" ],
        keywords: t,
        illegal: "</",
        contains: [ e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, {
            className: "string",
            begin: "'",
            end: "[^\\\\]'"
        }, {
            className: "string",
            begin: "`",
            end: "`"
        }, {
            className: "number",
            begin: e.C_NUMBER_RE + "[dflsi]?",
            relevance: 0
        }, e.C_NUMBER_MODE ]
    };
};
