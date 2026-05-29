---
title: Music Preserved from Music4YourVids.co.uk
_draft: true
---

The website [Music4YourVids.co.uk](https://www.music4yourvids.co.uk/) is back up after its many years of downtime! I have known many of RickVanMan's pieces, so I immediately knew what to do... Try to download the music from the site!

## The Investigation

My browser couldn't play those files, and I installed Firefox just in case. (I main Waterfox, BTW.) Still not good. The browser not supporting those files was not the issue.

I then installed [ImHex](https://imhex.werwolv.net/), a hex editor. I suspected the files were corrupted. So I looked at them, but I was in for a bigger surprise: those are actually HTML files!

![Investigating files with ImHex. Note the &lt;!DOCTYPE html&gt; at the beginning of the file.](/blog/music4yourvids-saved-tracks/ImHex_investigation.png)

The reason the browser displayed them "wrong" is that the `Content-Type` header is set incorrectly (it is `audio/mpeg`, but should be `text/html`).

Later, I realized the URLs contain a "random" string, like `https://www.music4yourvids.co.uk/file/9u6l44imjto6a4y/childhood%20memories%20of%20winter2.mp3` containing `9u6l44imjto6a4y`. The same style of strings is in MediaFire URLs. I substituted `www.music4yourvids.co.uk` for `www.mediafire.com`, and found out that a grand total of *two* links are still up!

## More Automated: Use Commands

I looked at an [archived copy](https://web.archive.org/web/20130302222728/http://music4yourvids.co.uk/freemusic.html) of the page, and indeed, those were MediaFire links. I downloaded that page.

```sh
curl https://web.archive.org/web/20130302222728/http://music4yourvids.co.uk/freemusic.html > The FREE Music.html
```

```sh
cat "The FREE Music.html" | grep 'https?://www\.mediafire\.com/.+?(?=")' -o
```

> The equivalent command for PowerShell on Windows is as follows:
>
> ```powershell
> gc "The FREE Music.html" | sls 'https?://www\.mediafire\.com/.+?(?=")' -raw
> ```

While I did research manually by opening each link individually, I ran the following command to confirm my findings:

```sh
cat links.txt | xargs -I % echo 'echo "% $(curl % -I -s | head -n 1)"' | sh
```

> The equivalent command for PowerShell on Windows is as follows:
>
> ```powershell
> gc links.txt | foreach { echo "$_ $(curl $_ -I -s | gc -head 1)" }
> ```

This is what I got from the command:

```txt
http://www.mediafire.com/file/asvw56sbaki8x27/African_Safari.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/t29e5y98f7hhx77/Retro_Lounge_Mix.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/540mdx05i4ipqy0/TRANCE1%20PARTY%20PEOPLE.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/e48he8aep9wy9rm/Oriental%20trance2.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/8l7x2tyxalhdkdl/Trance%20taboo.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/kdeu34zl72f7jfs/DREAMING%20OF%20YOU.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/b9ahqfabvvh9xz3/Thought%20Police.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/mrex8mltwtreym2/WHEN%20THE%20RAIN%20FALLS.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/66l8bbi2bt0sh3t/better%20luck%20tommorow3.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/t2y2qq4a572rp75/FILM%20-%20THE%20CHASE_1.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/1y29gcf299tqae8/FILM%20-%20BEGINNINGS.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/8q0dde9nvzzt42j/HEADDING%20FOR%20THE%20BATTLE%201.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/rnoc90vxgjnkca8/FILM%20-%20THE%20DRUMS%20OF%20WAR.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/u0iuuvnelkldm13/film%20-%20emotional%20strings.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/6qvrvwil779v3tm/FILM%20-%20ATMOSPHERE.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/gi2z4e27htxqf31/FILM%20-%20EFFICIENCY.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/b4w66w1wdb6di0e/filmscore%20-%20flight%20of%20fantasy.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/t66a9ppsm89317f/filmscore%20-%20opening%20credits1.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/wruoem2smpo17v6/ice%20plains%20of%20Nomahdee.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/fpda990qvyq8093/FILM%20-%20Run%20for%20your%20life.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/8pc43d8ifi5dh4e/LONELY%20PIANO%201.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/9u6l44imjto6a4y/childhood%20memories%20of%20winter2.mp3 HTTP/1.1 200 OK
http://www.mediafire.com/file/4h9th5k3m18rncd/CHILDHOOD%20MEMORIES%20OF%20WINTER%20piano%20solo.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/bt3bnqr8bsfemn8/ambient%20-%20oriental%20sunset.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/lp8w7h76g4o5wzk/Watching%20the%20sun%20go%20down2.mp3 HTTP/1.1 200 OK
http://www.mediafire.com/file/09ubg4kfynicny7/11%20second%20jingle.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/jywarqtdjw4cy2l/jingle2.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/51e7tfv5x98v8e2/HIPHOP1%20WITH%20VOCALS.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/lc3f1t2xh542kfl/HIPHOP1%20MINUS%20VOCALS.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/fe2r51xaux4biyc/Trance%202009.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/m1qt8t8pprz9d1k/A%20Letter%20from%20Dublin.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/6ebd8e87al2jfnj/Full%20Throttle.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/bu82k00op9cba65/Summer%20Morning%20128mbps.MP3 HTTP/1.1 302 Found
http://www.mediafire.com/file/2g2e3bd666grbc8/Summer%20Morning%20-%20alternative%20128mbps.MP3 HTTP/1.1 302 Found
```

Wherever there was the response `302 Found`, the browser would redirect me to MediaFire's "missing file" notice page. Those that returned `200 OK` were the ones preserved. You can filter them even further by piping to `grep '200 OK'` (Linux) or `sls '200 OK'` (PowerShell on Windows).

And last, but not least, a more "condensed version" for Linux:

```sh
curl https://web.archive.org/web/20130302222728/http://music4yourvids.co.uk/freemusic.html \
| grep 'https?://www\.mediafire\.com/.+?(?=")' -o \
| xargs -I % echo 'echo "% $(curl % -I -s | head -n 1)"' | sh \
| grep '200 OK'
```

And for PowerShell on Windows:

```powershell
curl https://web.archive.org/web/20130302222728/http://music4yourvids.co.uk/freemusic.html `
| sls 'https?://www\.mediafire\.com/.+?(?=")' -raw `
| foreach { echo "$_ $(curl $_ -I -s | gc -head 1)" }
| sls '200 OK'
```

## Full List of Soundtracks

For convenience of finding, they are in alphabetical order.

|Title|Preserved?|URL|
|-|-|-|
|*African Safari*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=YGV1BQsrW1U|
|*A Letter from Dublin*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=ndM-aXyw0KQ|
|*Beginnings*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=JICfM545Rr8|
|*Childhood Memories of Winter 2*|🏅 Official Link Active|https://www.mediafire.com/file/9u6l44imjto6a4y/childhood_memories_of_winter2.mp3|
|*Flight of Fantasy*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=FrdmwFKyK1g|
|*Full Throttle*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=dZmocLF4JyI|
|*Heading into Battle*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=AFliS8HQ2WI|
|*Oriental Trance*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=xoCgJS26e80|
|*Retro Lounge Mix*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=Pqk8BPDEj60|
|*Summer Morning*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=S1SJPRUmvqQ|
|*Thought Police*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=nTcUZBr7pUk|
|*Trance Taboo*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=MQfyINjA31s|
|*Trance 2009*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=D1BUnn7lB0A|
|*Trance1 Party People*|🪞 Unofficial Mirror|https://www.youtube.com/watch?v=ol6taGgorTE|
|*Watching The Sun Go Down*|🏅 Official Link Active|https://www.mediafire.com/file/lp8w7h76g4o5wzk/Watching%20the%20sun%20go%20down2.mp3|