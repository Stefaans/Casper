/**
 * The chat message type
 * The role of the message author can be either system, user or assistant
 */
export type MessageType = {
  role: "system" | "user" | "assistant";
  content: string;
};
