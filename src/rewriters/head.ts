const GOOGLE_FONT: any = 'IBM Plex Sans'

export default class HeadRewriter {
    element(element: any) {
      if (GOOGLE_FONT !== '') {
        element.append(
          `<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(
            ' ',
            '+',
          )}:Regular,Bold,Italic&display=swap" rel="stylesheet">
          <style>* { font-family: "${GOOGLE_FONT}" !important; }</style>`,
          {
            html: true,
          },
        )
      }
    }
  }