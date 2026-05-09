# Generates short Spanish demo audios (WAV) using Windows SAPI.
# Output: public/audio/*.wav

$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root 'public/audio'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function New-WavFromText {
  param(
    [Parameter(Mandatory = $true)][string]$Text,
    [Parameter(Mandatory = $true)][string]$OutFile
  )

  $voice = New-Object -ComObject SAPI.SpVoice
  $stream = New-Object -ComObject SAPI.SpFileStream

  # 3 = SSFMCreateForWrite
  $stream.Open($OutFile, 3, $false)

  $voice.AudioOutputStream = $stream
  $voice.Rate = 0
  $voice.Volume = 100

  [void]$voice.Speak($Text)

  $stream.Close()
}

New-WavFromText -Text 'Hola, soy Alicia. Te ayudo a planear tu viaje a Japón con rutas por estación, comida y lugares imperdibles.' -OutFile (Join-Path $outDir 'alicia.wav')
New-WavFromText -Text 'Hola, soy Zed. Si te interesa una carrera STEM, puedo contarte proyectos reales de robótica e inteligencia artificial y por dónde empezar.' -OutFile (Join-Path $outDir 'zed.wav')
New-WavFromText -Text 'Hola, soy Yuki. Puedo ayudarte con un plan de entrenamiento y consejos generales de nutrición para alcanzar tus metas.' -OutFile (Join-Path $outDir 'yuki.wav')

Get-ChildItem $outDir -Filter '*.wav' | Select-Object Name, Length
