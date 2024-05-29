import { render } from "@testing-library/react";
import TeamsLineups from "./TeamsLineups";
import { lineup } from "@/types/fixture";

let lineups: [lineup, lineup];

describe("Lineup", () => {
  beforeEach(() => {
    lineups = [
      {
        team: {
          id: 126,
          name: "Sao Paulo",
          logo: "https://media.api-sports.io/football/teams/126.png",
        },
        coach: {
          id: 241,
          name: "Thiago Carpini",
        },
        formation: "4-4-2",
        startXI: [
          {
            player: {
              id: 30763,
              name: "Jandrei",
              number: 93,
              pos: "G",
              grid: "1:1",
            },
          },
          {
            player: {
              id: 9949,
              name: "Igor Vinicius",
              number: 2,
              pos: "D",
              grid: "2:4",
            },
          },
          {
            player: {
              id: 2571,
              name: "R. Arboleda",
              number: 5,
              pos: "D",
              grid: "2:3",
            },
          },
          {
            player: {
              id: 6083,
              name: "A. Franco",
              number: 28,
              pos: "D",
              grid: "2:2",
            },
          },
          {
            player: {
              id: 180919,
              name: "Welington",
              number: 6,
              pos: "D",
              grid: "2:1",
            },
          },
          {
            player: {
              id: 10133,
              name: "Nikão",
              number: 43,
              pos: "M",
              grid: "3:4",
            },
          },
          {
            player: {
              id: 195107,
              name: "D. Bobadilla",
              number: 21,
              pos: "M",
              grid: "3:3",
            },
          },
          {
            player: {
              id: 1909,
              name: "Luiz Gustavo",
              number: 16,
              pos: "M",
              grid: "3:2",
            },
          },
          {
            player: {
              id: 6379,
              name: "G. Galoppo",
              number: 14,
              pos: "M",
              grid: "3:1",
            },
          },
          {
            player: {
              id: 10323,
              name: "Luciano",
              number: 10,
              pos: "F",
              grid: "4:2",
            },
          },
          {
            player: {
              id: 47368,
              name: "J. Calleri",
              number: 9,
              pos: "F",
              grid: "4:1",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 157150,
              name: "Wellington Rato",
              number: 27,
              pos: "M",
            },
          },
          {
            player: {
              id: 352994,
              name: "João Moreira",
              number: 30,
              pos: "D",
            },
          },
          {
            player: {
              id: 10501,
              name: "Alisson",
              number: 25,
              pos: "F",
            },
          },
          {
            player: {
              id: 313732,
              name: "Pablo Maia",
              number: 29,
              pos: "M",
            },
          },
          {
            player: {
              id: 106510,
              name: "Ferreira",
              number: 47,
              pos: "F",
            },
          },
          {
            player: {
              id: 180916,
              name: "Juan",
              number: 31,
              pos: "F",
            },
          },
          {
            player: {
              id: 10081,
              name: "Rafael",
              number: 23,
              pos: "G",
            },
          },
          {
            player: {
              id: 2440,
              name: "N. Ferraresi",
              number: 3,
              pos: "D",
            },
          },
          {
            player: {
              id: 449243,
              name: "William",
              number: 39,
              pos: "F",
            },
          },
          {
            player: {
              id: 143363,
              name: "Diego Costa",
              number: 4,
              pos: "D",
            },
          },
          {
            player: {
              id: 363689,
              name: "Rodriguinho",
              number: 18,
              pos: "M",
            },
          },
          {
            player: {
              id: 180921,
              name: "Patryck",
              number: 36,
              pos: "D",
            },
          },
        ],
      },
      {
        team: {
          id: 1214,
          name: "Portuguesa",
          logo: "https://media.api-sports.io/football/teams/1214.png",
        },
        coach: {
          id: 3060,
          name: "Dado Cavalcanti",
        },
        formation: "4-2-3-1",
        startXI: [
          {
            player: {
              id: 77966,
              name: "Thomazella",
              number: 1,
              pos: "G",
              grid: "1:1",
            },
          },
          {
            player: {
              id: 10021,
              name: "Douglas Borel",
              number: 2,
              pos: "D",
              grid: "2:4",
            },
          },
          {
            player: {
              id: 51395,
              name: "Y. Quintana",
              number: 3,
              pos: "D",
              grid: "2:3",
            },
          },
          {
            player: {
              id: 195443,
              name: "Patrick",
              number: 4,
              pos: "D",
              grid: "2:2",
            },
          },
          {
            player: {
              id: 50757,
              name: "Marquinhos Pedroso",
              number: 6,
              pos: "D",
              grid: "2:1",
            },
          },
          {
            player: {
              id: 9840,
              name: "Zé Ricardo",
              number: 5,
              pos: "M",
              grid: "3:2",
            },
          },
          {
            player: {
              id: 197364,
              name: "Eduardo",
              number: 8,
              pos: "M",
              grid: "3:1",
            },
          },
          {
            player: {
              id: 157158,
              name: "Chrigor",
              number: 11,
              pos: "M",
              grid: "4:3",
            },
          },
          {
            player: {
              id: 10356,
              name: "Giovanni Augusto",
              number: 10,
              pos: "M",
              grid: "4:2",
            },
          },
          {
            player: {
              id: 10215,
              name: "Victor Andrade",
              number: 7,
              pos: "M",
              grid: "4:1",
            },
          },
          {
            player: {
              id: 12915,
              name: "Henrique Dourado",
              number: 9,
              pos: "F",
              grid: "5:1",
            },
          },
        ],
        substitutes: [
          {
            player: {
              id: 9750,
              name: "Ricardinho",
              number: 18,
              pos: "M",
            },
          },
          {
            player: {
              id: 9260,
              name: "Felipe Marques",
              number: 21,
              pos: "F",
            },
          },
          {
            player: {
              id: 306881,
              name: "Luccas Paraizo",
              number: 19,
              pos: "F",
            },
          },
          {
            player: {
              id: 216550,
              name: "Rone",
              number: 17,
              pos: "F",
            },
          },
          {
            player: {
              id: 303975,
              name: "Marco Antônio",
              number: 13,
              pos: "D",
            },
          },
          {
            player: {
              id: 77916,
              name: "Rafael Pascoal",
              number: 12,
              pos: "G",
            },
          },
          {
            player: {
              id: 425109,
              name: "Denis",
              number: 23,
              pos: "M",
            },
          },
          {
            player: {
              id: 77670,
              name: "Eduardo Diniz",
              number: 16,
              pos: "D",
            },
          },
          {
            player: {
              id: 68053,
              name: "Diogo Silva",
              number: 15,
              pos: "D",
            },
          },
          {
            player: {
              id: 195413,
              name: "Tauã Belo",
              number: 20,
              pos: "M",
            },
          },
          {
            player: {
              id: 374398,
              name: "Maceió",
              number: 24,
              pos: "F",
            },
          },
          {
            player: {
              id: 195327,
              name: "Robson",
              number: 14,
              pos: "D",
            },
          },
        ],
      },
    ];
  });

  test("should render correctly", () => {
    const component = render(<TeamsLineups lineups={lineups} />);

    expect(component.container).not.toBeEmptyDOMElement();
    expect(component.getByText("Sao Paulo")).toBeInTheDocument();
    expect(component.getByText("Portuguesa")).toBeInTheDocument();
    expect(component.getByText("4-4-2")).toBeInTheDocument();
    expect(component.getByText("4-2-3-1")).toBeInTheDocument();
    expect(component.getByText("Jandrei")).toBeInTheDocument();
    expect(component.getByText("Thomazella")).toBeInTheDocument();
  });

  test("should render nothing if no home lineup was given", () => {
    const lineup = [{}, lineups[1]];

    /* @ts-expect-error: maybe test empty lineup by purpose*/
    const component = render(<TeamsLineups lineups={lineup} />);

    expect(component.container).toBeEmptyDOMElement();
  });

  test("should render nothing if no away lineup was given", () => {
    const lineup = [lineups[0], {}];

    /* @ts-expect-error: maybe test empty lineup by purpose*/
    const component = render(<TeamsLineups lineups={lineup} />);

    expect(component.container).toBeEmptyDOMElement();
  });
});
