/**
 * @class
 * @extends Language
 */
class Italiano extends Language
{
    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{未使用のアイテムを全て削除}}", "Rimuovere tutti gli articoli inutilizzati"],
            ["{{レイヤーをペースト}}", "Strato di pasta"],
            ["{{レイヤーをコピー}}", "Copiare il livello"],
            ["{{フレームをペースト}}", "Incolla la cornice"],
            ["{{フレームをコピー}}", "Cornice di copia"],
            ["{{キーフレームを削除}}", "Elimina i fotogrammi chiave"],
            ["{{キーフレームに空のキーフレームを追加できません}}", "Impossibile aggiungere keyframes vuoti ai keyframes"],
            ["{{ズームツール}}", "Strumento zoom"],
            ["{{タイムライン幅の拡大・縮小}}", "Larghezza della timeline Espandere/ridurre"],
            ["{{ガイドレイヤー}}", "strato guida"],
            ["{{音量設定}}", "Regolazione del volume"],
            ["{{サウンドを削除}}", "Rimuovere il suono"],
            ["{{カスタムループ}}", "anello personalizzato"],
            ["{{読込のみ}}", "Leggere solo"],
            ["{{書込を許可}}", "autorizzazione del post"],
            ["{{単一行}}", "Linea singola"],
            ["{{複数行}}", "Multiline"],
            ["{{自動で折り返し}}", "Avvolgimento automatico"],
            ["{{左寄せ}}", "Sinistra"],
            ["{{中央揃え}}", "Centro"],
            ["{{右寄せ}}", "Destra"],
            ["{{放射状グラデーション}}", "gradazione radiale"],
            ["{{線形グラデーション}}", "gradiente lineare"],
            ["{{画像}}", "Immagine"],
            ["{{画像選択}}", "Selezione dell'immagine"],
            ["{{種別}}", "Tipo"],
            ["{{Shapeの色設定}}", "Impostazioni del colore della forma"],
            ["{{変形}}", "deformazione"],
            ["{{カラー効果}}", "Trasformazione del colore"],
            ["{{フィルター}}", "filtro"],
            ["{{Shapeを複製}}", "Forma duplicata"],
            ["{{読込(画像, MP3, MP4, SWF)}}", "Leggere (immagini, MP3, MP4, SWF)"],
            ["{{新規フォルダー}}", "Nuova cartella"],
            ["{{新規MovieClip}}", "Nuovo MovieClip"],
            ["{{枠に合わせてテキストをリサイズ}}", "Ridimensiona il testo per adattarlo alla cornice"],
            ["{{テキストに合わせて枠をリサイズ}}", "Ridimensiona la cornice per adattarla al testo"],
            ["{{リサイズしない}}", "Nessun ridimensionamento"],
            ["{{フォント}}", "font"],
            ["{{テキスト}}", "Testo"],
            ["{{ループ}}", "loop"],
            ["{{音量}}", "volume"],
            ["{{ビデオ}}", "Video"],
            ["{{イージング}}", "facilitando"],
            ["{{サウンド}}", "suono"],
            ["{{シンボル}}", "Simbolo"],
            ["{{名前}}", "Nome"],
            ["{{オブジェクト}}", "oggetto"],
            ["{{ステージ設定}}", "Scenario"],
            ["{{プレビュー}}", "Anteprima"],
            ["{{削除}}", "Cancellare"],
            ["{{ペースト}}", "Incolla"],
            ["{{コピー}}", "Copia"],
            ["{{プラグインメニュー}}", "Menu del plug-in"],
            ["{{トゥイーン}}", "tween"],
            ["{{カーブポインターの追加}}", "Puntatore di curva supplementare"],
            ["{{パスの結合}}", "Fusione di percorsi"],
            ["{{シェイプ}}", "forma"],
            ["{{キーフレームに配分}}", "Assegnazione ai fotogrammi chiave"],
            ["{{レイヤーに配分}}", "Assegnazione ai livelli"],
            ["{{タイムライン}}", "Timeline"],
            ["{{整列}}", "Allineare"],
            ["{{最背面}}", "La maggior parte della schiena"],
            ["{{ひとつ背面へ}}", "Uno sul retro"],
            ["{{ひとつ前面へ}}", "Una parte anteriore"],
            ["{{最前面}}", "In prima linea"],
            ["{{重ね順}}", "Organizzare"],
            ["{{プラグイン}}", "plug-in"],
            ["{{ライブラリ}}", "biblioteca"],
            ["{{プロパティ}}", "proprietà"],
            ["{{マスクレイヤー}}", "strato di maschera"],
            ["{{通常レイヤー}}", "Strato normale"],
            ["{{モーショントゥイーンの削除}}", "Soppressione dei tweens di movimento"],
            ["{{モーショントゥイーンの追加}}", "Ulteriori tween di movimento"],
            ["{{モーダル表示}}", "indicazione modale"],
            ["{{言語}}", "Lingua"],
            ["{{フォーマット}}", "formato"],
            ["{{含める}}", "includere"],
            ["{{含めない}}", "non includere"],
            ["{{使い方、リファレンス}}", "Uso, riferimento"],
            ["{{非表示レイヤー}}", "strato nascosto"],
            ["{{設定}}", "setup"],
            ["{{デフォルトのループを利用する}}", "Utilizzare il ciclo predefinito"],
            ["{{フレームピッカー}}", "raccoglitore di cornici"],
            ["{{左揃え}}", "Sinistra"],
            ["{{中央揃え(水平方向)}}", "Centro (Orizzontalità)"],
            ["{{右揃え}}", "Destra"],
            ["{{上揃え}}", "Top"],
            ["{{中央揃え(垂直方向)}}", "Centro (Verticale)"],
            ["{{下揃え}}", "Fondo"],
            ["{{開始フレーム}}", "telaio di partenza"],
            ["{{終了フレーム}}", "telaio finale"],
            ["{{ループで再生}}", "Gioca in loop"],
            ["{{1回再生}}", "1 riproduzione"],
            ["{{指定したフレームで固定}}", "Fissato nella cornice specificata"],
            ["{{1回逆再生}}", "1 riproduzione inversa"],
            ["{{逆ループで再生}}", "Riproduzione in loop inverso"],
            ["{{画面の拡大・縮小}}", "Ingrandire e rimpicciolire lo schermo"],
            ["{{カスタムイージングデータを保存}}", "Salva i dati di easing personalizzati"],
            ["{{カスタムイージングデータの読込}}", "Lettura dei dati di easing personalizzati"],
            ["{{プレビューのON/OFF}}", "Anteprima on/off"],
            ["{{フォント枠サイズ}}", "Dimensione della cornice del carattere"],
            ["{{フォント枠カラー}}", "Colore della cornice del carattere"],
            ["{{オニオンスキン}}", "Pelle di cipolla"],
            ["{{バケツツール}}", "Strumenti a secchiello"],
            ["{{ペンツール}}", "Strumento penna"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Doppio clic per aggiungere un punto di curva"],
            ["{{選択ツール}}", "Strumenti di selezione"],
            ["{{Shape変形ツール}}", "Strumento di trasformazione della forma"],
            ["{{テキストツール}}", "Text Tool"],
            ["{{短形ツール}}", "Strumento di testo"],
            ["{{楕円ツール}}", "Strumento Ellisse"],
            ["{{角丸矩形ツール}}", "Strumento Rettangolo arrotondato"],
            ["{{塗りのカラー}}", "Colore di riempimento"],
            ["{{線のカラー}}", "Colore del tratto"],
            ["{{線の太さ}}", "Larghezza della corsa"],
            ["{{プロジェクトデータの読込}}", "Caricamento dei dati del progetto"],
            ["{{プロジェクトデータを保存}}", "Salvare i dati del progetto"],
            ["{{書き出し}}", "Esportazione"],
            ["{{Discordへ移動}}", "Vai su discordia"],
            ["{{バグ報告}}", "Segnalazioni di bug"],
            ["{{設定}}", "Impostazione"],
            ["{{タブを追加}}", "Aggiungere una scheda"],
            ["{{タブの一覧を表示・移動}}", "Visualizzare e spostarsi attraverso l'elenco delle schede"],
            ["{{スクリプトを追加}}", "Aggiungere uno script"],
            ["{{キーフレームを追加}}", "Aggiungere un keyframe"],
            ["{{空のキーフレームを追加}}", "Aggiungere un keyframe vuoto"],
            ["{{フレームを追加}}", "Aggiungere una cornice"],
            ["{{フレームを削除}}", "Cancellare la cornice"],
            ["{{再生}}", "Gioca"],
            ["{{停止}}", "Fermare"],
            ["{{ループ設定}}", "Impostazione del loop"],
            ["{{レイヤーを追加}}", "Aggiungere uno strato"],
            ["{{レイヤーを削除}}", "Cancellare il livello"],
            ["{{全てのレイヤーをハイライト}}", "Evidenzia tutti i livelli"],
            ["{{全てのレイヤーを非表示}}", "Nascondi tutti i livelli"],
            ["{{全てのレイヤーをロック}}", "Blocca tutti i livelli"],
            ["{{比率を固定}}", "Rapporto fisso"],
            ["{{ステージの幅}}", "Larghezza del palco"],
            ["{{背景色}}", "Colore di sfondo"],
            ["{{ステージの高さ}}", "Altezza del palco"],
            ["{{フレームレート}}", "Frame Rate"],
            ["{{シンボル名}}", "Nome del simbolo"],
            ["{{イージング設定}}", "Impostazione di rilassamento"],
            ["{{ビデオの音量設定}}", "Impostazione del volume video"],
            ["{{自動再生}}", "Riproduzione automatica"],
            ["{{テキストエリアのボーダー設定}}", "Impostazione del bordo dell'area di testo"],
            ["{{テキスト入力設定}}", "Impostazione dell'inserimento del testo"],
            ["{{フォント選択}}", "Seleziona il carattere"],
            ["{{自動サイズ調整}}", "Regolazione automatica delle dimensioni"],
            ["{{フォントスタイルタイプ}}", "Tipo di stile di carattere"],
            ["{{行揃え}}", "Allineare"],
            ["{{改行設定}}", "Impostazione Newline"],
            ["{{スクロール設定}}", "Impostazione dello scorrimento"],
            ["{{フォントサイズ}}", "Dimensione del carattere"],
            ["{{フォントカラー}}", "Colore del carattere"],
            ["{{行間}}", "Spazio di linea"],
            ["{{文字幅}}", "Larghezza del carattere"],
            ["{{左マージン}}", "Margine sinistro"],
            ["{{右マージン}}", "Margine destro"],
            ["{{カラー種別の選択}}", "Seleziona un tipo di colore"],
            ["{{背景画像の選択}}", "Selezionare un'immagine di sfondo"],
            ["{{カラーポインターを追加}}", "Aggiungere i puntatori di colore"],
            ["{{カラー値}}", "Colore"],
            ["{{アルファ(0%-100%)}}", "Alpha(0%-100%)"],
            ["{{アルファ値}}", "Alpha"],
            ["{{選択対象の幅}}", "Larghezza dell'oggetto di selezione"],
            ["{{選択対象のX座標}}", "Coordinata X dell'oggetto di selezione"],
            ["{{選択対象の高さ}}", "Altezza dell'oggetto di selezione"],
            ["{{選択対象のY座標}}", "Coordinata Y dell'oggetto di selezione"],
            ["{{選択対象の幅の伸縮}}", "scaleX dell'oggetto selezionato"],
            ["{{選択対象を回転}}", "Ruotare l'oggetto"],
            ["{{選択対象の高さの伸縮}}", "scalaY dell'oggetto selezionato"],
            ["{{アルファオフセット(-255〜255)}}", "Offset alfa(-255〜255)"],
            ["{{赤(0%-100%)}}", "Rosso(0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Offset rosso(-255〜255)"],
            ["{{緑(0%-100%)}}", "Verde(0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Offset Verde(-255〜255)"],
            ["{{青(0%-100%)}}", "Blu(0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Offset Blu(-255〜255)"],
            ["{{ブレンドモード}}", "Modalità di fusione"],
            ["{{フィルターを選択}}", "Seleziona un filtro"],
            ["{{フィルターを追加}}", "Aggiungere un filtro"],
            ["{{サウンドを追加}}", "Aggiungere un suono"],
            ["{{フィルターを表示・非表示する}}", "Mostrare e nascondere i filtri"],
            ["{{フィルターを削除}}", "Cancellare il filtro"],
            ["{{水平方向にぼかす}}", "Sfocatura orizzontale"],
            ["{{垂直方向にぼかす}}", "Sfocatura verticale"],
            ["{{フィルター強度}}", "Forza del filtro"],
            ["{{フィルター角度}}", "Angolo del filtro"],
            ["{{シャドウのアルファ}}", "Ombra alfa"],
            ["{{シャドウのカラー}}", "Colore dell'ombra"],
            ["{{フィルター距離}}", "Distanza del filtro"],
            ["{{ハイライトのカラー}}", "Colore in evidenza"],
            ["{{ハイライトのアルファ}}", "Evidenziare l'alfa"],
            ["{{グラデーションカラー}}", "Colore sfumato"],
            ["{{グラデーションのアルファ}}", "Gradiente alfa"],
            ["{{タブの移動・名前を変更}}", "Spostare/rinominare le schede"],
            ["{{プロジェクトを閉じる}}", "Chiudere il progetto"],
            ["{{上下に移動}}", "Sposta su e giù"],
            ["{{レイヤー変更(ダブルクリック)}}", "Cambio di livello (doppio clic)"],
            ["{{レイヤーをハイライト}}", "Strato di evidenziazione"],
            ["{{レイヤーを非表示}}", "Nascondere lo strato"],
            ["{{レイヤーをロック}}", "Bloccare il livello"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Curve Pointer (doppio clic per attivare/disattivare)"],
            ["{{インスタンス名}}", "Nome dell'istanza"],
            ["{{ライブラリ内の検索}}", "Cerca nella biblioteca"],
            ["{{フレームラベル}}", "Etichetta del telaio"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "Se il progetto non viene salvato, i dati del progetto in questa scheda non possono essere recuperati. Vuoi cancellare la scheda?"]
        ]);
    }
}
