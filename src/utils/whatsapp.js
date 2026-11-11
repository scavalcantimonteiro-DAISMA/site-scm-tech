export const WHATSAPP_NUMBER = '5581984255125';
export const WHATSAPP_DISPLAY = '(81) 98425-5125';
export const CONTACT_EMAIL = 'scavalcantimonteiro@gmail.com';
export const INSTAGRAM_HANDLE = '@scmtech';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vi o portfólio da SCM Tech no site e gostaria de solicitar um orçamento.';

export function getWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
