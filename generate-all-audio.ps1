# Generare WAV-uri Hedda pentru Pflege L10 - Erster Morgen
# 10 dictat + 48 flashcards = 58 fisiere

$lessonPath = $PSScriptRoot
$audioDir = "$lessonPath\audio"
$lettersDir = "$audioDir\letters"

if (-not (Test-Path $audioDir)) { New-Item -ItemType Directory -Force -Path $audioDir | Out-Null }
if (-not (Test-Path $lettersDir)) { New-Item -ItemType Directory -Force -Path $lettersDir | Out-Null }

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = -1

# DICTAT (10)
$dictat = @(
    @{ file='dictat-01.wav'; text='das Fruhstuck.' },
    @{ file='dictat-02.wav'; text='das Brotchen.' },
    @{ file='dictat-03.wav'; text='die Marmelade.' },
    @{ file='dictat-04.wav'; text='die Tablette.' },
    @{ file='dictat-05.wav'; text='der Blutdruck.' },
    @{ file='dictat-06.wav'; text='die Schmerzen.' },
    @{ file='dictat-07.wav'; text='der Albtraum.' },
    @{ file='dictat-08.wav'; text='aufwachen.' },
    @{ file='dictat-09.wav'; text='aufstehen.' },
    @{ file='dictat-10.wav'; text='einnehmen.' }
)

# FLASHCARDS (48)
$flashcards = @(
    # Wecken + Somn (8)
    @{ file='guten-morgen.wav';        text='Guten Morgen!' },
    @{ file='sind-sie-wach.wav';       text='Sind Sie wach?' },
    @{ file='aufwachen.wav';           text='aufwachen. Aufgewacht.' },
    @{ file='aufstehen.wav';           text='aufstehen. Aufgestanden.' },
    @{ file='wecken.wav';              text='wecken.' },
    @{ file='wie-geschlafen.wav';      text='Wie haben Sie geschlafen?' },
    @{ file='gut-schlecht-geschlafen.wav'; text='Ich habe gut geschlafen. Ich habe schlecht geschlafen.' },
    @{ file='albtraum.wav';            text='der Albtraum.' },

    # Schmerzen + Scala (8)
    @{ file='haben-schmerzen.wav';     text='Haben Sie Schmerzen?' },
    @{ file='ruecken-tut-weh.wav';     text='Mein Rucken tut weh.' },
    @{ file='knie-tun-weh.wav';        text='Meine Knie tun weh.' },
    @{ file='kopfschmerzen.wav';       text='Ich habe Kopfschmerzen.' },
    @{ file='wo-tut-weh.wav';          text='Wo tut es weh?' },
    @{ file='wie-stark.wav';           text='Wie stark sind die Schmerzen?' },
    @{ file='skala-1-10.wav';          text='auf einer Skala von eins bis zehn.' },
    @{ file='seit-wann.wav';           text='Seit wann haben Sie die Schmerzen?' },

    # Frühstück (8)
    @{ file='fruehstueck.wav';         text='das Fruhstuck.' },
    @{ file='broetchen.wav';           text='das Brotchen.' },
    @{ file='butter.wav';              text='die Butter.' },
    @{ file='marmelade.wav';           text='die Marmelade.' },
    @{ file='kaese.wav';               text='der Kase.' },
    @{ file='ei.wav';                  text='das Ei. Die Eier.' },
    @{ file='kaffee.wav';              text='der Kaffee.' },
    @{ file='tee.wav';                 text='der Tee.' },

    # Tabletten + Medical (8)
    @{ file='tablette.wav';            text='die Tablette.' },
    @{ file='tropfen.wav';             text='die Tropfen.' },
    @{ file='insulin.wav';             text='das Insulin.' },
    @{ file='medikamentenplan.wav';    text='der Medikamentenplan.' },
    @{ file='blutdruck.wav';           text='der Blutdruck.' },
    @{ file='blutzucker.wav';          text='der Blutzucker.' },
    @{ file='einnehmen.wav';           text='einnehmen. Eingenommen.' },
    @{ file='messen.wav';              text='messen. Gemessen.' },

    # Perfekt typisch (8)
    @{ file='hat-geschlafen.wav';      text='Sie hat gut geschlafen.' },
    @{ file='ist-aufgewacht.wav';      text='Sie ist aufgewacht.' },
    @{ file='ist-aufgestanden.wav';    text='Sie ist aufgestanden.' },
    @{ file='hat-gegessen.wav';        text='Sie hat Brotchen gegessen.' },
    @{ file='hat-getrunken.wav';       text='Sie hat Tee getrunken.' },
    @{ file='hat-genommen.wav';        text='Sie hat Tabletten genommen.' },
    @{ file='hat-gehabt.wav';          text='Sie hat Albtraume gehabt.' },
    @{ file='ist-eingeschlafen.wav';   text='Sie ist eingeschlafen.' },

    # Prepoziții + Construcții (8)
    @{ file='zum-fruehstueck.wav';     text='zum Fruhstuck.' },
    @{ file='vor-essen.wav';           text='vor dem Essen.' },
    @{ file='nach-essen.wav';          text='nach dem Essen.' },
    @{ file='mit-butter.wav';          text='mit Butter und Marmelade.' },
    @{ file='moechten.wav';            text='Mochten Sie?' },
    @{ file='schmeckt-ihnen.wav';      text='Schmeckt es Ihnen?' },
    @{ file='moechten-noch.wav';       text='Mochten Sie noch?' },
    @{ file='glas-wasser.wav';         text='mit einem Glas Wasser.' }
)

$total = $dictat.Count + $flashcards.Count
$ok = 0; $fail = 0; $idx = 0

Write-Host "=== DICTAT ($($dictat.Count)) ===" -ForegroundColor Cyan
foreach ($w in $dictat) {
    $idx++; $wavPath = Join-Path $audioDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: $($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: $($w.file)" -ForegroundColor Red }
}

Write-Host "=== FLASHCARDS ($($flashcards.Count)) ===" -ForegroundColor Cyan
foreach ($w in $flashcards) {
    $idx++; $wavPath = Join-Path $lettersDir $w.file
    try {
        $synth.SetOutputToWaveFile($wavPath); $synth.Speak($w.text); $synth.SetOutputToNull()
        $ok++; Write-Host "  [$idx/$total] OK: letters/$($w.file)" -ForegroundColor Green
    } catch { $fail++; Write-Host "  [$idx/$total] FAIL: letters/$($w.file)" -ForegroundColor Red }
}

$synth.Dispose()
Write-Host ""
Write-Host "TOTAL: $ok OK, $fail FAIL din $total" -ForegroundColor $(if ($fail -eq 0) { 'Green' } else { 'Yellow' })
