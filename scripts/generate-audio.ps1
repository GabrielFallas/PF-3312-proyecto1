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

New-WavFromText -Text 'Hola, soy Seed. ¿En qué puedo ayudarte hoy?' -OutFile (Join-Path $outDir 'seed-san.wav')
New-WavFromText -Text 'Soy un asistente técnico. Puedo guiarte paso a paso.' -OutFile (Join-Path $outDir 'vrm1-constraint.wav')
New-WavFromText -Text 'Sistema en línea. Ejecutando saludo y sincronización labial.' -OutFile (Join-Path $outDir 'robot.wav')

Get-ChildItem $outDir -Filter '*.wav' | Select-Object Name, Length
