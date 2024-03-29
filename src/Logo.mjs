export const View = ({ root }) =>
  Link({ to: root, class: 'Logo' }, [
    svg({ viewBox: '0 0 666 500', height: '50', width: '66' }, [
      path({
        d: 'M334 0C206-3 81 75 30 193c-43 96-41 215 13 307h583c84-150 32-364-117-453C457 16 395 0 334 0z',
        fill: '#639',
      }),
      path({
        d: 'M335 5L44 490h583zm0 64l95 157c-51-46-142-41-189 0zm-3 182c38 1 80 28 97 68l16 1v27l-16 1c-10 24-31 26-43 32-8 27 16 37 22 8l23 4c-13 54-77 47-70-7l-17 1-2 36-25 3v-40c-31-4-66-8-80-37l-17-1 1-29 16 1c10-39 50-68 95-68zm0 25c-40 0-75 26-73 55 12 33 120 42 144-1-6-39-52-54-71-54zm0 12c15 0 28 13 28 29s-13 29-28 29c-16 0-30-13-30-29s14-29 30-29zm-139 16c-19 64 36 137 86 156H99zm285 0l94 156H392c63-23 101-92 86-156z',
        fill: '#fff',
      }),
    ]),
  ])

export const style = {
  float: 'left',
  height: '2.4em',

  svg: {
    display: 'inline-block',
    width: '3em',
    height: 'auto',
  },

  span: {
    '.Header &&': {
      lineHeight: 1,
      margin: '0.4em',
    },
  },
}
