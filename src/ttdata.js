export default {
  students: {
    educationTypes: [
      {
        type: "mag_col_preschool",
        title: "Магистратура, колледж, ДОУ",
      },
      {
        type: "bac_spec",
        title: "Бакалавриат, специалитет",
        courses: [
          {
            courseNumber: 1,
            groups: [
              {
                groupTitle: "T123",
                week1: [
                  {
                    day: "Mon",
                    classes: [
                      {
                        type: "practice",
                        formatGroup: "classic",
                        subgroups: [
                          {
                            subgroupTitle: 1,
                            className: "Конструкция самолёта (вертолёта) 2",
                            room: "а.13-03",
                            teacher: "ПАВЛОВ А.Н",
                          },
                          {
                            subgroupTitle: 2,
                            className: "ДВО 3 САПР CAD 2 в проектно-конструкторской работе",
                            room: "а.13-01",
                            teacher: "ЦЫДЫПОВ Ц.Ц.",
                          },
                        ],
                      },
                      {
                        type: "practice",
                        formatGroup: "classic",
                        subgroups: [
                          {
                            subgroupTitle: 1,
                            className: "Конструкция самолёта (вертолёта) 2",
                            room: "а.13-03",
                            teacher: "ПАВЛОВ А.Н",
                          },
                          {
                            subgroupTitle: 2,
                            className: "ДВО 3 САПР CAD 2 в проектно-конструкторской работе",
                            room: "а.13-01",
                            teacher: "ЦЫДЫПОВ Ц.Ц.",
                          },
                        ],
                      },
                      {
                        type: "practice",
                        formatGroup: "classic",
                        subgroups: [
                          {
                            subgroupTitle: 1,
                            className: "ДВО 3 САПР CAD 2 в проектно-конструкторской работе",
                            room: "а.13-01",
                            teacher: "ЦЫДЫПОВ Ц.Ц.",
                          },
                        ],
                      },
                      null,
                      null,
                      null,
                    ],
                  },
                  {
                    day: "Tue",
                    classes: [
                      null,
                      {
                        type: "practice",
                        formatGroup: "classic",
                        subgroups: [
                          {
                            subgroupTitle: 1,
                            className: "Детали механизмов и машин в авиастроении 2",
                            room: "а.13-01",
                            teacher: "БИТУЕВ И.К.",
                          },
                        ],
                      },
                      {
                        type: "practice",
                        formatGroup: "classic",
                        subgroups: [
                          {
                            subgroupTitle: 1,
                            className: "Конструкция самолёта (вертолёта) 2",
                            room: "а.13-03",
                            teacher: "ПАВЛОВ А.Н",
                          },
                          {
                            subgroupTitle: 2,
                            className: "ДВО 3 САПР CAD 2 в проектно-конструкторской работе",
                            room: "а.13-01",
                            teacher: "ЦЫДЫПОВ Ц.Ц.",
                          },
                        ],
                      },
                      {
                        type: "practice",
                        formatGroup: null,
                        className: "Аддитивные технологии",
                        teacher: "ПАВЛОВ А.Н.",
                        room: "а.13-03",
                      },
                      {
                        type: "practice",
                        formatGroup: "classic",
                        subgroups: [
                          {
                            subgroupTitle: 2,
                            className: "ДВО 3 САПР CAD 2 в проектно-конструкторской работе",
                            room: "а.13-01",
                            teacher: "ЦЫДЫПОВ Ц.Ц.",
                          },
                        ],
                      },
                      null,
                    ],
                  },
                  {
                    day: "Wed",
                    classes: [
                      null,
                      {
                        type: "practice",
                        formatGroup: "classic",
                        subgroups: [
                          {
                            subgroupTitle: 1,
                            className: "Детали механизмов и машин в авиастроении 2",
                            room: "а.720",
                            teacher: "БИТУЕВ И.К.",
                          },
                        ],
                      },
                      {
                        type: "lecture",
                        formatGroup: null,
                        className: "Прочность конструкций летательных аппаратов 1",
                        teacher: "ДАВЛЕТОВ Р.М.",
                        room: "а.13-02",
                      },
                      {
                        type: "practice",
                        formatGroup: "classic",
                        subgroups: [
                          {
                            subgroupTitle: 2,
                            className: "Детали механизмов и машин в авиастроении 2",
                            room: "а.720",
                            teacher: "БИТУЕВ И.К.",
                          },
                        ],
                      },
                      null,
                      null,
                    ],
                  },
                  {
                    day: "Thu",
                    classes: [
                      null,
                      {
                        type: "lecture",
                        formatGroup: null,
                        className: "Основа производства деталей и узлов",
                        teacher: "ИНХЕЕВ Б.С.",
                        room: "а.709",
                      },
                      {
                        type: "practice",
                        formatGroup: null,
                        className: "Прочность конструкций летательных аппаратов 1",
                        teacher: "ДАВЛЕТОВ Р.М.",
                        room: "а.13-02",
                      },
                      {
                        type: "lecture",
                        formatGroup: null,
                        className: "Проектирование самолётов 1",
                        teacher: "ЗАНГЕЕВ Б.И.",
                        room: "а.13-04 и/д",
                      },
                      {
                        type: "practice",
                        formatGroup: null,
                        className: "Проектирование самолётов 1",
                        teacher: "ЗАНГЕЕВ Б.И.",
                        room: "а.13-04 и/д",
                      },
                      null,
                    ],
                  },
                  {
                    day: "Fri",
                    classes: [
                      null,
                      {
                        type: "practice",
                        formatGroup: null,
                        className: "Динамика полёта самолёта 2",
                        teacher: "ЗАНГЕЕВ Б.И.",
                        room: "а.13-04 и/д",
                      },
                      {
                        type: "practice",
                        formatGroup: null,
                        className: "Основа производства деталей и узлов",
                        teacher: "ИНХЕЕВ Б.С",
                        room: "а.709",
                      },
                      null,
                      null,
                      null,
                    ],
                  },
                  { day: "Sat", classes: [] },
                ],
                week2: [
                  {
                    day: "Mon",
                    classes: [
                      {
                        type: "lecture",
                        formatGroup: null,
                        className: "Динамика полёта самолёта 2",
                        teacher: "ЗАНГЕЕВ Б.И.",
                        room: "а.13-04 и/д",
                      },
                      {
                        type: "practice",
                        formatGroup: null,
                        className: "Динамика полёта самолёта 2",
                        teacher: "ЗАНГЕЕВ Б.И.",
                        room: "а.13-04 и/д",
                      },
                      {
                        type: "practice",
                        formatGroup: "classic",
                        subgroups: [
                          {
                            subgroupTitle: 1,
                            className: "Конструкция самолёта (вертолёта) 2",
                            room: "а.13-03",
                            teacher: "ПАВЛОВ А.Н",
                          },
                          {
                            subgroupTitle: 1,
                            className: "ДВО 3 САПР CAD 2 в проектно-конструкторской работе",
                            room: "а.13-01",
                            teacher: "ЦЫДЫПОВ Ц.Ц.",
                          },
                        ],
                      },
                      {},
                      null,
                      null,
                    ],
                  },
                  {
                    day: "Tue",
                    classes: [{}, {}, {}, {}, null, null],
                  },
                  {
                    day: "Wed",
                    classes: [{}, {}, {}, {}, null, null],
                  },
                  {
                    day: "Thu",
                    classes: [{}, {}, {}, {}, null, null],
                  },
                  {
                    day: "Fri",
                    classes: [{}, {}, {}, null, null, null],
                  },
                  { day: "Sat", classes: [] },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "dist1",
        title: "Заочное 1",
      },
      {
        type: "dist2",
        title: "Заочное 2",
      },
    ],
  },
  teachers: {},
};
