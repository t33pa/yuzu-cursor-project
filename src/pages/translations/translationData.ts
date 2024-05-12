export const TRANSLATIONS = {
    "ja": {
        "header-t": "ゆずソフトカーソルプロジェクト",
        "header-s": "By ゆずソフト海外ファンサーバー",
        "language-button": "English",
        "about-t": "プロジェクト概要",
        "about-1": "ゆずソフト海外ファンサーバーのプロジェクトの一つで、ゆずソフトの作品をテーマにしたマウスカーソルを無料で配布しています。",
        "about-2-1": "マウスカーソル作成者の、April 17th (X/Twitter: ",
        "about-2-2": ", Discord: april17th) に連絡して、カーソルを手に入れることができます。",
        "about-3": "このページでは、カーソルのサンプルや、インストールの方法を確認することができます。",
        "showcase-t": "カーソル一覧",
        "showcase-option-1": "カーソルシリーズ",
        "showcase-option-2": "キャラクター選択",
        "help-t": "使い方",
        "help-1": "1. ファイルを展開して、インストールしたいカーソルフォルダ内の .inf ファイルを右クリックして、「インストール」を押してください",
        "help-2": "2. 設定から、「個人用設定」→「テーマ」→「マウス」に移動して、「マウスのプロパティ」タブを開きます",
        "help-2-1": "2-1. また、「Bluetoothとデバイス」→「マウス」→「マウスの追加設定」でも開くことができます",
        "help-3": "3. マウスのプロパティから、ポインタータブに移動し、「デザイン」でインストールしたカーソルを選択し、「OK」を押して適用してください",
        "help-contact": "もし何か問題があれば、ご連絡お願いします",
        "server-t":"ゆずソフトファンサーバーについて",
        "server-1": "ゆずソフトファンサーバーは、2020年に結成された千恋万花ファンサーバーから発足した、日本のゲームブランドであるゆずソフトのDiscordファンサーバーです。現在1,000人以上の様々な国のメンバーが参加し、ゆずソフトやノベルゲームなど、様々なことに関して、活発にテキストチャット、ボイスチャットで会話が行われています。 ",
        "server-2": "他にも、プレゼント企画や、日本でのオフ会、クイズなど様々な活動を行っています！基本的に英語が使われていますが、日本語で会話するチャットもあります。誰でも歓迎しているので、興味があればぜひ参加してください！",
        "server-join": "参加する！",
        "footer-1": "Webサイト制作: ",
        "footer-2": "このページで使用されている画像は、(c)YUZUSOFT/JUNOS INC.に帰属し、無断転載を禁じます。"
    },
    "en": {
        "header-t": "Yuzusoft Custom Cursor Project",
        "header-s": "By Yuzusoft Fan Server",
        "language-button": "日本語",
        "about-t": "About This Project",
        "about-1": "This is one of the fan projects done by the Yuzusoft Fan Server, in which cursor sets featuring Yuzusoft's visual novels and heroines have been created, and can be used by anyone for free!  ",
        "about-2-1": "You can get your cursor set by contacting April 17th, the creator!  (X/Twitter: ",
        "about-2-2": ", Discord: april17th)",
        "about-3": "On this page, you can find samples for the sets and a guide for their installation!",
        "showcase-t": "Showcase",
        "showcase-option-1": "Cursor set",
        "showcase-option-2": "Character",
        "help-t": "Usage Guide",
        "help-1": "1. Decompress/unzip the file and locate the folder of the cursor you installed. Right-click on the .inf file and select 'Install.'  ",
        "help-2": "2. Open the settings, go to 'Themes' → 'Themes and related settings' → 'Mouse Cursor.' A tab to Mouse Properties will open.",
        "help-2-1": "2-1. Alternatively, go to 'Bluetooth & Devices' → 'Mouse' → 'Additional Mouse Settings' to open the tab",
        "help-3": "3. Open the pointers tab and select the cursor theme you want; press 'okay' to apply the changes",
        "help-contact": "Please let us know if you have any questions or problems!",
        "server-t": "About Yuzusoft Fan Server",
        "server-1": "Previously a fan server for Senren＊Banka that formed in 2020, we have expanded to become an unofficial fan server for Yuzusoft. We currently have over 1,000 members and host active text and voice chat discussions about Yuzusoft and visual novels in not only English, but also in Japanese and Chinese!",
        "server-2": "We host fun activities like giveaways, VC events, quizzes, and more! Anyone is welcome to join, so if you're interested, come join us!",
        "server-join": "Join Our Discord!",
        "footer-1": "Website created by ",
        "footer-2": "Images used on this page belong to (c)YUZUSOFT/JUNOS INC, and may not be reproduced without permission."
    }
}  as Record<string, Record<string, string>>

export const CHARACTER_LIST = {
    sanoba: ["nene", "meguru", "tsumugi", "touko", "wakana"],
    stella: ["kanna", "natsume", "nozomi", "mei", "suzune"],
  } as Record<string, string[]>;

export const CHARACTER_NAME_LIST= {
  "en": {
      sanoba: {
          nene: "Ayachi Nene",
          meguru: "Inaba Meguru",
          tsumugi: "Shiiba Tsumugi",
          touko: "Togakushi Touko",
          wakana: "Kariya Wakana",
      },
      stella: {
          kanna: "Akizuki Kanna",
          natsume: "Shiki Natsume",
          nozomi: "Sumizome Nozomi",
          mei: "Hiuchidani Mei",
          suzune: "Shioyama Suzune",
      }
  },
  "ja": {
      sanoba: {
          nene: "綾地寧々",
          meguru: "因幡めぐる",
          tsumugi: "椎葉紬",
          touko: "戸隠憧子",
          wakana: "仮屋和奏",
      },
      stella: {
          kanna: "明月栞那",
          natsume: "四季ナツメ",
          nozomi: "墨染希",
          mei: "火打谷愛衣",
          suzune: "汐山涼音"
      },
  }
} as Record<string, Record<string, Record<string, string>>>

export const CURSOR_STATUS_LIST = {
    "en": [
        "Normal Select",
        "Help Select",
        "Working In Background",
        "Busy",
        "Precision Select",
        "Text Select",
        "Handwriting",
        "Unavailable",
        "Vertical Resize",
        "Horizontal Resize",
        "Diagonal Resize",
        "Diagonal Resize 2",
        "Move",
        "Alternate Select",
        "Link Select",
    ],
  "ja": [
      "通常選択",
      "ヘルプ選択",
      "動作中",
      "待ち状態",        
      "領域選択",
      "テキスト選択",
      "手書き",
      "利用不可",
      "上下リサイズ",
      "左右リサイズ",
      "斜めリサイズ1",
      "斜めリサイズ2",
      "移動",
      "代替選択",
      "リンク選択",
    ]
} as Record<string, string[]>

export const CURSOR_SERIES_LIST = {
    "en": [
        "Sabbat of the Witch",
        "Café Stella and the Reapers' Butterflies"
    ],
    "ja": [
        "サノバウィッチ",
        "喫茶ステラと死神の蝶"
    ]
} as Record<string, string[]>