// Replace these URLs with the actual paths to your uploaded images when deploying.
// For now, I am using placeholders that closely match the visual description provided.

export const IMAGES = {
	// Use Image 1 (Logo) here
	LOGO: "https://via.placeholder.com/150x80/F9F8F6/5D4037?text=Casa+Ris%C3%B4",

	// Use Image 5 (Ceiling/Baskets) here - Warm, wicker textures
	HERO_BG: "/foto-5.png",

	// Use Image 2 (Table/Wine Glass) here - Intimacy
	ATMOSPHERE:
		"https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",

	// Use Image 4 (Salmon Dish) here - The food highlight
	DISH_SALMON:
		"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",

	// Use Image 3 (Neon/Brick) here - Textural detail
	DETAIL_NEON:
		"https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1000&auto=format&fit=crop",

	// Extra textures
	TEXTURE_WOOD:
		"https://images.unsplash.com/photo-1588017366380-4b5744795995?q=80&w=600&auto=format&fit=crop",
};

export const CONTENT = {
	ADDRESS: "Teixeira de Freitas - BA",
	PHONE: "(73) 99999-8888",
	INSTAGRAM: "@casariso",
	RESERVATION_LINK: "#reservas",
	OPENING_HOURS: "Ter. a Sáb. 19h-22:30 | Dom. 12h-15h",
};

export const MENU_HIGHLIGHTS = [
	{
		category: "Para Começar",
		name: "Bolinho Cremoso de Cordeiro",
		description:
			"Feito com cordeiro cozido até desmanchar, sem massa! (04 uni.)",
		price: "R$ 49",
	},
	{
		category: "Risotos",
		name: "Risoto de Filé Mignon de Sol",
		description: "Com queijo coalho e melaço. Um clássico da casa.",
		price: "R$ 89",
	},
	{
		category: "Contemporâneo",
		name: "Parmô",
		description:
			"Parmegiana de filé mignon com tomate pelati e queijo gratinado.",
		price: "R$ 79",
	},
	{
		category: "Sobremesa",
		name: "Surpresa Risô",
		description:
			"Esfera de chocolate que revela brownie, sorvete e morangos frescos.",
		price: "R$ 42",
	},
];

export const FAQS = [
	{
		question: "Vocês atendem sem reserva?",
		answer: "Sim, atendemos sem reserva também. As reservas são apenas para garantir que você chegará aqui e encontrará uma mesa disponível imediatamente.",
	},
	{
		question: "Qual o horário de funcionamento?",
		answer: "Funcionamos de terça-feira a sábado, das 19h às 22:30. Aos domingos, abrimos para almoço das 12h às 15:00. Às segundas-feiras estamos fechados.",
	},
	{
		question: "Posso reservar mesa após as 20h30?",
		answer: "Não, as mesas ficam reservadas apenas até as 20h30. Após este horário, todas as mesas disponíveis ficarão liberadas para os clientes por ordem de chegada.",
	},
	{
		question: "Realizam eventos e confraternizações?",
		answer: "Sim! É possível reservar para noivados, aniversários ou reuniões. Podemos fazer um cardápio específico, reservar o espaço parcial ou inteiro. Tudo ajustado após uma reunião.",
	},
	{
		question: "Vocês fazem entrega?",
		answer: "Não fazemos entrega (delivery), mas conseguimos preparar para que vocês possam vir buscar seu pedido (take-away). Basta nos enviar um Direct no Instagram.",
	},
	{
		question: "Como entro em contato?",
		answer: "Atualmente estamos concentrando toda nossa comunicação através do nosso Instagram @casariso.",
	},
];

export const WINE_POLICY = {
	title: "Você sabia?",
	subtitle: "Seu vinho é bem-vindo aqui em nossa casa.",
	standard_fee: "R$ 39,99",
	description: "Trabalhamos com taxa de rolha por garrafa aberta.",
	promo_title: "Rolha Free",
	promo_days: "Toda terça e quarta-feira",
	promo_desc:
		"Você não paga nada para tomar seu vinho aqui conosco nestes dias.",
};
