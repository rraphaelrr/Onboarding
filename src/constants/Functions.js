import api from "../api/api";

export const headers = {
  authorization:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjM0NDcsInV0eXBlIjoiY29wYXJ0Iiwic3VidHlwZSI6IiIsInVuYW1lIjoicmFwaGFlbHJvZCIsImN1c3RvbSI6eyJhbGxvd2VkWWFyZHMiOltdfSwiZXhwIjo2MzgxODAzODQ3OTI0NjMxMjZ9.6VhWDpVoaSntnYjdUcXhR6TS2lLdgdIBfGJqTryfq8A",
};

export async function consultingUserInfo(data) {
  const body = data;
  const response = await api.get("Onboarding/GetCodeInformation?code=" + body, {
    headers,
  });
  return response.data;
}

export async function getMemberInformation(data) {
  const body = data;
  const response = await api.post("Onboarding/GetMemberInformation", body, {
    headers,
  });
  return response.data;
}
