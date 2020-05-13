class cFactor {
  constructor(
    cFactorLabel,
    num,
    numExp,
    numUnit,
    numComp,
    denom,
    denomExp,
    denomUnit,
    denomComp
  ) {
    this.cFactorLabel = cFactorLabel;
    this.num = num;
    this.numExp = numExp;
    this.numUnit = numUnit;
    this.numComp = numComp;
    this.denom = denom;
    this.denomExp = denomExp;
    this.denomUnit = denomUnit;
    this.denomComp = denomComp;

    this.reverse = function () {
      this.denom = num;
      this.denomExp = numExp;
      this.denomUnit = numUnit;
      this.denomComp = numComp;
      this.num = denom;
      this.numExp = denomExp;
      this.numUnit = denomUnit;
      this.numComp = denomComp;
      return `num = ${this.num} and denom = ${this.denom}`;
    };
  }
}

cFactor.prototype.getNum = function () {
  return `Numerator: ${this.num} E ${this.numExp} ${this.numUnit} ${this.NumComp}`;
};

cFactor.prototype.getDenom = function () {
  return `Denominator: ${this.denom} E ${this.denomExp} ${this.denomUnit} ${this.denomComp}`;
};

gramsNitrogenPerMol = new cFactor(
  "Nitrogen grams per mol",
  14.0067,
  1,
  "grams",
  "Nitrogen",
  1,
  undefined,
  "mol",
  "nitrogen"
);

atomsPerMol = new cFactor(
  "Atoms per mol",
  6.023,
  23,
  "atoms",
  undefined,
  1,
  undefined,
  "mol",
  undefined
);

console.log(atomsPerMol.getNum());
console.log(atomsPerMol.getDenom());
console.log(atomsPerMol.reverse());
