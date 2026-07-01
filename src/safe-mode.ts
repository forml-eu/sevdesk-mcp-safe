/**
 * SAFE FORK: tools disabled because they are destructive or move money.
 * This Set is the ONLY place to change what the safe MCP server exposes.
 * When merging upstream, review new server.tool(...) additions and add any
 * unsafe ones here.
 */
export const DISABLED_TOOLS = new Set<string>([
  // --- Deletes (16) ---
  "delete_contact",
  "delete_invoice",
  "delete_invoice_position",
  "delete_voucher",
  "delete_voucher_position",
  "delete_credit_note",
  "delete_credit_note_position",
  "delete_order",
  "delete_order_position",
  "delete_check_account",
  "delete_transaction",
  "delete_part",
  "delete_tag",
  "remove_tag_from_object",
  "delete_contact_address",
  "delete_communication_way",
  // --- Payments & bank transactions (4) ---
  "book_invoice_payment",
  "book_voucher_payment",
  "create_transaction",
  "update_transaction",
]);
