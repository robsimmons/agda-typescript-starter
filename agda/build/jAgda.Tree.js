var agdaRTS = require("agda-rts");

var z_jAgda_Agda_Primitive = require("jAgda.Agda.Primitive");

exports["Nat"] = {};
exports["Tree"] = {};
exports["Nat"]["z"] = a => a["z"]();
exports["Nat"]["s"] = a => b => b["s"](a);
exports["Tree"]["leaf"] = a => a["leaf"]();
exports["Tree"]["node"] = a => b => c => c["node"](a,b);
exports["max"] = a => b => a({
    "s": c => b({
      "s": d => exports["Nat"]["s"](exports["max"](c)(d)),
      "z": () => a
    }),
    "z": () => b
  });
exports["height"] = a => a({
    "leaf": () => exports["Nat"]["z"],
    "node": (b,c) => exports["Nat"]["s"](
      exports["max"](exports["height"](b))(exports["height"](c))
    )
  });
exports["balanced"] = a => a({
    "s": b => exports["Tree"]["node"](exports["balanced"](b))(exports["balanced"](b)),
    "z": () => exports["Tree"]["leaf"]
  });
exports["unbalanced"] = a => a({
    "s": b => exports["Tree"]["node"](exports["Tree"]["leaf"])(exports["unbalanced"](b)),
    "z": () => exports["Tree"]["leaf"]
});