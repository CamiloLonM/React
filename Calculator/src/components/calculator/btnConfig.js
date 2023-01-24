export const BTN_ACTIONS = {
  ADD: 'ADD',
  THEME: 'THEME',
  CALC: 'CALC',
  DELETE: 'DELETE',
};

export const btns = [
  {
    display: '',

    class: 'btn_op',
  },
  {
    display: 'CE',
    action: BTN_ACTIONS.DELETE,
    class: 'btn_op',
  },
  {
    display: 'C',
    action: BTN_ACTIONS.DELETE,
    class: 'btn_op',
  },

  {
    display: '',
  },
  {
    display: 'Modo',
    action: BTN_ACTIONS.THEME,
    class: '',
  },
  {
    display: '(',
    action: BTN_ACTIONS.ADD,
    class: 'btn_op',
  },
  {
    display: ')',
    action: BTN_ACTIONS.ADD,
    class: 'btn_op',
  },

  {
    display: '/',
    action: BTN_ACTIONS.ADD,
    class: 'btn_op',
  },
  {
    display: '7',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: '8',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: '9',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: 'x',
    action: BTN_ACTIONS.ADD,
    class: 'btn_op',
  },
  {
    display: '4',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: '5',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: '6',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: '-',
    action: BTN_ACTIONS.ADD,
    class: 'btn_op',
  },
  {
    display: '1',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: '2',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: '3',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: '+',
    action: BTN_ACTIONS.ADD,
    class: 'btn_op',
  },
  {
    display: '+/-',
    class: 'btn_op',
  },
  {
    display: '0',
    action: BTN_ACTIONS.ADD,
    class: '',
  },
  {
    display: '.',
    action: BTN_ACTIONS.ADD,
    class: '',
  },

  {
    display: '=',
    action: BTN_ACTIONS.CALC,
    class: 'btn_op',
  },
];
