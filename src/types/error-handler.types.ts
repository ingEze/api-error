export interface ErrorResponse {
  success: boolean
  type: string
  statusCode: number
  message: string
  details?: Record<string, unknown>
}
