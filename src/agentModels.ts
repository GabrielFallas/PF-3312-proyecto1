export type AgentId = "seed-san" | "vrm1-constraint" | "alicia-solid";

export type AgentAction = "idle" | "wave" | "nod" | "point" | "walk";

export type AgentExpression = "neutral" | "joy" | "sad" | "doubt";

export interface AgentModel {
	id: AgentId;
	displayName: string;
	modelUrl: string;
	audioUrl: string;
	profileTitle: string;
	roleSummary: string;
	personalitySummary: string;
	interactionContext: string;
	appearanceJustification: string;
	voiceProfile: string;
	lipSyncGain: number;
	lipSyncFloor: number;

	// For documentation/reporting.
	sourceUrl: string;
	licenseUrl: string;
	licenseName: string;
	authorCredit: string;
}

export const AGENTS: readonly AgentModel[] = [
	{
		id: "seed-san",
		displayName: "Seed-san (VirtualCast)",
		modelUrl: "/models/seed-san.vrm",
		audioUrl: "/audio/seed-san.wav",
		profileTitle: "Agente de orientacion academica",
		roleSummary:
			"Perfil amable y accesible para recibir personas, explicar pasos y mantener una presencia relajada.",
		personalitySummary:
			"Cercana, positiva y clara; se apoya en una expresion alegre y gestos de saludo suaves.",
		interactionContext:
			"Se imagina atendiendo recepcion, orientacion estudiantil y acompanamiento inicial para personas que necesitan instrucciones claras.",
		appearanceJustification:
			"Su estetica amigable y neutra reduce friccion en la interaccion y ayuda a que el usuario perciba apoyo, cercania y paciencia desde el primer contacto.",
		voiceProfile:
			"Voz Daniel (en_GB), tono de hombre joven, claro y amable para un agente de orientacion.",
		lipSyncGain: 8.8,
		lipSyncFloor: 0.016,
		sourceUrl:
			"https://github.com/vrm-c/vrm-specification/tree/master/samples/Seed-san",
		licenseUrl: "https://vrm.dev/licenses/1.0/",
		licenseName: "VRM Public License 1.0",
		authorCredit: "VirtualCast, Inc.",
	},
	{
		id: "vrm1-constraint",
		displayName: "VRM1 Constraint Twist Sample (pixiv)",
		modelUrl: "/models/vrm1-constraint-twist-sample.vrm",
		audioUrl: "/audio/vrm1-constraint.wav",
		profileTitle: "Agente tecnico de laboratorio",
		roleSummary:
			"Perfil mas sobrio para explicar procesos, confirmar estados y enfatizar instrucciones puntuales.",
		personalitySummary:
			"Preciso, atento y meticuloso; destaca con asentimientos y senales de direccion.",
		interactionContext:
			"Se imagina dentro de un laboratorio o flujo de soporte tecnico donde debe indicar pasos, confirmar estados y guiar procesos con seguridad.",
		appearanceJustification:
			"Su presencia visual mas sobria y estructurada funciona mejor para un rol tecnico, porque transmite orden, claridad y confianza operativa.",
		voiceProfile:
			"Voz Samantha (en_US), joven, profesional y precisa para una asistente tecnica.",
		lipSyncGain: 9.2,
		lipSyncFloor: 0.016,
		sourceUrl:
			"https://github.com/vrm-c/vrm-specification/tree/master/samples/VRM1_Constraint_Twist_Sample",
		licenseUrl: "https://vrm.dev/licenses/1.0/",
		licenseName: "VRM Public License 1.0",
		authorCredit: "pixiv Inc.",
	},
	{
		id: "alicia-solid",
		displayName: "Alicia Solid (DWANGO)",
		modelUrl: "/models/alicia-solid.vrm",
		audioUrl: "/audio/alicia-solid.wav",
		profileTitle: "Agente de asistencia futurista",
		roleSummary:
			"Perfil visualmente mas avanzado para una demostracion de tecnologia, guia interactiva y soporte dinamico.",
		personalitySummary:
			"Segura, expresiva y curiosa; combina dudas visibles con un estilo mas marcado.",
		interactionContext:
			"Se imagina como una asistente interactiva para demostraciones tecnologicas, acompanamiento visual y soporte digital de alto impacto.",
		appearanceJustification:
			"Su apariencia estilizada y mas futurista refuerza un contexto de innovacion, hace mas evidente el contraste con los otros perfiles y mejora la lectura de expresiones dramaticas.",
		voiceProfile:
			"Voz Karen (en_AU), tono femenino calido y natural para una asistente futurista de alto impacto.",
		lipSyncGain: 9.6,
		lipSyncFloor: 0.015,
		sourceUrl:
			"https://github.com/vrm-c/UniVRM/tree/master/Tests/Models/Alicia_vrm-0.51",
		licenseUrl: "https://3d.nicovideo.jp/alicia/rule.html",
		licenseName: "Licencia especifica de Alicia / DWANGO",
		authorCredit: "© DWANGO Co., Ltd.",
	},
] as const;

