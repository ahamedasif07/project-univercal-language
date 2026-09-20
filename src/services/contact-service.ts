import { ContactFormData } from "@/validators/contact-schema";
import { ApiResponse } from "@/types";

export async function submitContactMessage(
  data: ContactFormData
): Promise<ApiResponse<{ messageId: string }>> {
  // Simulates network dispatch or call to apiClient.post('/api/contact', data)
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    message: `Thank you, ${data.name}! Your message has been received.`,
    data: {
      messageId: `msg_${Date.now()}`,
    },
  };
}
