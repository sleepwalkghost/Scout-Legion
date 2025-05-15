// ==UserScript==
// @name         Scout Legion
// @namespace    http://tampermonkey.net/
// @license MIT
// @version      1.0
// @description  Очередная модификация мода на шаблоны, но теперь для разведки
// @match        http*://*.catwar.net/*
// @match        http*://*.catwar.su/*
// @updateURL    https://github.com/sleepwalkghost/Scout-Legion/raw/refs/heads/main/scoutlegion.user.js
// @downloadURL  https://github.com/sleepwalkghost/Scout-Legion/raw/refs/heads/main/scoutlegion.user.js

// ==/UserScript==

(function () {
  'use strict';

  setTimeout(function () {

    var select = document.createElement('select');
    select.style.marginTop = '10px';

    var options = [{
        text: 'Разведка',
        value: '',
        subject: ''
      },
      {
        text: 'Скалолаз | Самостоятельное',
        value: `[bgrf=#304266][center][size=25][font=impact][color=#B3C0D9]Разведывательный Легион[/color][/font][/size][/center][/bgrf][size=1][bgrf=#000230]　[/bgrf][/size][size=3][bgrf=#ffffff5]　[/bgrf][/size][center][div=https://iimg.su/s/23/K8WLJiZvc27rvGN2K4Unffe5kj3gfTINv0gUd5VR.png][table=0][/div][/center][td]　[/td][img]https://iimg.su/s/08/NbdiN3PbLZbiN8EizV5ysS63bbII4oNwlbAAZC4t.png[/img]
[td][block=000][table][/td][td][table=0][/td][td][/table][/table][/block][bgrf=#ffffff90]　[font=bookman old style][size=12][color=#000240][table=0][/color][/size][/font][/bgrf][/td][td]　[/td][td][center]Приветствую, юный скалолаз! Поздравляю с зачислением на [b]самостоятельное обучение[/b] в Северный Разведывательный легион!
Теперь я твой попечитель, ты можешь обращаться ко мне по любым интересующим тебя вопросам!

[b]Учебное пособие[/b]: [url=https://docs.google.com/document/d/1ldtJzoa_dY4_WchcVEF00sBXIKrD9FjWI_ulCM240Pk/edit]нажми, чтобы открыть[/url]

[img]https://iimg.su/s/23/fSjBkBnShuVh3E1eGJ11A5ijC0zTkqYrgOJOgvqV.png[/img][/center][/td][td]　[bgrf=0][font=0][size=0][color=0][/table][/color]　[/size][/font][/bgrf][/td][td]　[/td][center][div=0][/table]　[/div][/center][size=3][bgrf=#ffffff5]　[/bgrf][/size][bgrf=#304266][right][size=15][font=impact][color=#B3C0D9] ©️ Твой попечитель, успехов тебе!  [/color][/font][/size][/right][/bgrf][size=1][bgrf=#000230]　[/bgrf][/size]

`
          .replace(/\n/g, '\[br]'),
        subject: 'Северный разведывательный легион'
      },
      {
        text: 'Скалолаз | Попечительское',
        value: `[bgrf=#304266][center][size=25][font=impact][color=#B3C0D9]Разведывательный Легион[/color][/font][/size][/center][/bgrf][size=1][bgrf=#000230]　[/bgrf][/size][size=3][bgrf=#ffffff5]　[/bgrf][/size][center][div=https://iimg.su/s/23/K8WLJiZvc27rvGN2K4Unffe5kj3gfTINv0gUd5VR.png][table=0][/div][/center][td]　[/td][img]https://iimg.su/s/08/NbdiN3PbLZbiN8EizV5ysS63bbII4oNwlbAAZC4t.png[/img]
[td][block=000][table][/td][td][table=0][/td][td][/table][/table][/block][bgrf=#ffffff90]　[font=bookman old style][size=12][color=#000240][table=0][/color][/size][/font][/bgrf][/td][td]　[/td][td][center]Приветствую, юный скалолаз! Поздравляю с зачислением на [b]попечительское обучение[/b] в Северный Разведывательный легион!
Теперь я твой попечитель, ты можешь обращаться ко мне по любым интересующим тебя вопросам!

[b]Уроки[/b]: [url=https://docs.google.com/document/d/1METtqOk2XsGn0cUfP_w6Of7kLWAiWiJ6lCf9zeWQcaE/edit]нажми, чтобы открыть[/url]

Не забудь обязательно ответить на вопросы, после того, как ознакомишься со всей информацией из уроков! Требований к оформлению нет, как и ограничений по времени.

[i]Также ты можешь запросить у меня проведение интерактивов, чтобы закрепить материал, или узнать что-то новое! [/i]

[img]https://iimg.su/s/23/fSjBkBnShuVh3E1eGJ11A5ijC0zTkqYrgOJOgvqV.png[/img][/center][/td][td]　[bgrf=0][font=0][size=0][color=0][/table][/color]　[/size][/font][/bgrf][/td][td]　[/td][center][div=0][/table]　[/div][/center][size=3][bgrf=#ffffff5]　[/bgrf][/size][bgrf=#304266][right][size=15][font=impact][color=#B3C0D9] ©️ Твой попечитель, успехов тебе!  [/color][/font][/size][/right][/bgrf][size=1][bgrf=#000230]　[/bgrf][/size]

`
          .replace(/\n/g, '\[br]'),
        subject: 'Северный разведывательный легион'
      },
      {
        text: 'Восходитель | Самостоятельное',
        value: `[bgrf=#304266][center][size=25][font=impact][color=#B3C0D9]Разведывательный Легион[/color][/font][/size][/center][/bgrf][size=1][bgrf=#000230]　[/bgrf][/size][size=3][bgrf=#ffffff5]　[/bgrf][/size][center][div=https://iimg.su/s/23/iwICiVb79Pi3032CPLBnqdGEDQLkMaUV53aDn1WD.png][table=0][/div][/center][td]　[/td][img]https://iimg.su/s/08/NbdiN3PbLZbiN8EizV5ysS63bbII4oNwlbAAZC4t.png[/img]
[td][block=000][table][/td][td][table=0][/td][td][/table][/table][/block][bgrf=#ffffff90]　[font=bookman old style][size=12][color=#000240][table=0][/color][/size][/font][/bgrf][/td][td]　[/td][td][center]Приветствую, умелый восходитель! Поздравляю с зачислением на [b]самостоятельное обучение[/b] в Северный Разведывательный легион!
Теперь я твой попечитель, ты можешь обращаться ко мне по любым интересующим тебя вопросам!

[b]Учебное пособие[/b]: [url=https://docs.google.com/document/d/1Ytt890VFJvsgrodVkJ07cQsUvLmlIwgstF4E3-QfG3U/edit]нажми, чтобы открыть[/url]

[img]https://iimg.su/s/23/HkeBbRQNfaGNQDE1s3QaBJRdEbvIqV9lnZ4yyY0l.png[/img][/center][/td][td]　[bgrf=0][font=0][size=0][color=0][/table][/color]　[/size][/font][/bgrf][/td][td]　[/td][center][div=0][/table]　[/div][/center][size=3][bgrf=#ffffff5]　[/bgrf][/size][bgrf=#304266][right][size=15][font=impact][color=#B3C0D9] ©️ Твой попечитель, успехов тебе!  [/color][/font][/size][/right][/bgrf][size=1][bgrf=#000230]　[/bgrf][/size]

`
          .replace(/\n/g, '\[br]'),
        subject: 'Северный разведывательный легион'
      },
      {
        text: 'Восходитель | Попечительское',
        value: `[bgrf=#304266][center][size=25][font=impact][color=#B3C0D9]Разведывательный Легион[/color][/font][/size][/center][/bgrf][size=1][bgrf=#000230]　[/bgrf][/size][size=3][bgrf=#ffffff5]　[/bgrf][/size][center][div=https://iimg.su/s/23/iwICiVb79Pi3032CPLBnqdGEDQLkMaUV53aDn1WD.png][table=0][/div][/center][td]　[/td][img]https://iimg.su/s/08/NbdiN3PbLZbiN8EizV5ysS63bbII4oNwlbAAZC4t.png[/img]
[td][block=000][table][/td][td][table=0][/td][td][/table][/table][/block][bgrf=#ffffff90]　[font=bookman old style][size=12][color=#000240][table=0][/color][/size][/font][/bgrf][/td][td]　[/td][td][center]Приветствую, умелый восходитель! Поздравляю с зачислением на [b]попечительское обучение[/b] в Северный Разведывательный легион!
Теперь я твой попечитель, ты можешь обращаться ко мне по любым интересующим тебя вопросам!

[b]Уроки[/b]: [url=https://docs.google.com/document/d/1suqO84RfH8cu8-bHaBNWHqd-O8Ciwv3_UP2HJEAwCSs/edit]нажми, чтобы открыть[/url]

Не забудь обязательно ответить на вопросы, после того, как ознакомишься со всей информацией из уроков! Требований к оформлению нет, как и ограничений по времени.

[i]Ты также можешь запросить у меня проведение интерактивов, чтобы закрепить материал, или узнать что-то новое! [/i]

[img]https://iimg.su/s/23/HkeBbRQNfaGNQDE1s3QaBJRdEbvIqV9lnZ4yyY0l.png[/img][/center][/td][td]　[bgrf=0][font=0][size=0][color=0][/table][/color]　[/size][/font][/bgrf][/td][td]　[/td][center][div=0][/table]　[/div][/center][size=3][bgrf=#ffffff5]　[/bgrf][/size][bgrf=#304266][right][size=15][font=impact][color=#B3C0D9] ©️ Твой попечитель, успехов тебе!  [/color][/font][/size][/right][/bgrf][size=1][bgrf=#000230]　[/bgrf][/size]

`
          .replace(/\n/g, '\[br]'),
        subject: 'Северный разведывательный легион'
      }
    ];

     options.forEach(function(option) {
            var optionElement = document.createElement('option');
            optionElement.text = option.text;
            optionElement.value = option.value;
            optionElement.subject = option.subject;
            select.add(optionElement);
        });

        var textarea = document.querySelector('textarea[name="text"]');
        var subjectInput = document.querySelector('input[name="subject"]');
        var sendButton = document.querySelector('#submit');

        textarea.parentNode.insertBefore(select, textarea.nextSibling);

        select.addEventListener('change', function(event) {
            event.stopPropagation();
            var selectedOption = select.options[select.selectedIndex];
            textarea.value = selectedOption.value;
            subjectInput.value = selectedOption.subject;
        });
    }, 500);
})();
