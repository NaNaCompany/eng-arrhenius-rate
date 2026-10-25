export const tool = {
  "id": "E041",
  "title": "아레니우스 속도상수 계산기",
  "inputs_text": "빈도인자 A [해당 반응차수의 k와 같은 단위], 활성화에너지 E_a [J/mol], 절대온도 T [K]",
  "formula": "k = A exp(−E_a / (R T))",
  "output_text": "해당 온도의 속도상수 k [입력 A와 같은 단위]",
  "assumptions": "A,T>0. A와 E_a를 일정하게 볼 수 있는 반응·온도 범위를 사용한다. k를 모두 s⁻¹로 단정하지 않으며 kJ/mol은 J/mol로 변환한다.",
  "purpose": "아레니우스 방정식 계산 / 반응속도 온도 검산",
  "sources": [
    {
      "label": "OpenStax · Collision Theory",
      "url": "https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory"
    }
  ],
  "slug": "eng-arrhenius-rate",
  "category": "반응",
  "result_label": "아레니우스 속도상수 k",
  "result_dimension": "rateCoefficient",
  "fields": [
    {
      "key": "a",
      "label": "빈도인자 A",
      "dimension": "rateCoefficient",
      "example": 10000000000000.0,
      "constraint": "positive",
      "display_unit": "first",
      "display_value": "10000000000000"
    },
    {
      "key": "ea",
      "label": "활성화에너지 E_a",
      "dimension": "activation",
      "example": 75000,
      "constraint": "signed",
      "display_unit": "kJmol",
      "display_value": "75"
    },
    {
      "key": "t",
      "label": "절대온도 T",
      "dimension": "temperature",
      "example": 500,
      "constraint": "positive",
      "display_unit": "K",
      "display_value": "500"
    }
  ],
  "site": "https://nanalab.kr/eng-arrhenius-rate/",
  "repository": "https://github.com/NaNaCompany/eng-arrhenius-rate",
  "condition": "",
  "output_unit": "first"
};
