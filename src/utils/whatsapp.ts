export const WHATSAPP_NUMBER = '2347063007700';

export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppUrl(
  productName: string,
  price: number,
  details: string = ''
): string {
  const parts = [
    `Hello M.M ZAKEER COMPUTER (00010),`,
    `I'm interested in ${productName} priced at ₦${price.toLocaleString()}.`,
  ];

  if (details.trim()) {
    parts.push(`Details: ${details.trim()}`);
  }

  parts.push('Please confirm availability and next steps.');

  return generateWhatsAppLink(parts.join('\n\n'));
}

export function getSetupCalculatorUrl(
  selectedItems: { name: string; price: number }[],
  total: number
): string {
  const itemLines = selectedItems
    .map((item) => `• ${item.name} — ₦${item.price.toLocaleString()}`)
    .join('\n');

  const message = `Hello M.M ZAKEER COMPUTER (00010)!\n\nI built a custom setup on your website:\n\n${itemLines}\n\n*TOTAL: ₦${total.toLocaleString()}*\n\nPlease confirm availability and next steps. Thank you!`;

  return generateWhatsAppLink(message);
}