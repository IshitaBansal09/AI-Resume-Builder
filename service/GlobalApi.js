const STORAGE_KEY = 'ai_resume_builder_resumes';

const getAll = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

const saveAll = (resumes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resumes));
};

const CreateNewResume = (data) => {
  const resumes = getAll();
  const newResume = {
    documentId: data.data.resumeId,
    ...data.data,
    themeColor: '#6d28d9',
    Experience: [],
    education: [],
    skills: [],
    summery: '',
  };
  resumes.push(newResume);
  saveAll(resumes);
  return Promise.resolve({ data: { data: newResume } });
};

const GetUserResumes = (userEmail) => {
  const resumes = getAll().filter((r) => r.userEmail === userEmail);
  return Promise.resolve({ data: { data: resumes } });
};

const UpdateResumeDetail = (id, data) => {
  const resumes = getAll();
  const index = resumes.findIndex((r) => r.documentId === id);
  if (index !== -1) {
    resumes[index] = { ...resumes[index], ...data.data };
    saveAll(resumes);
    return Promise.resolve({ data: { data: resumes[index] } });
  }
  return Promise.resolve({ data: { data: null } });
};

const GetResumeById = (id) => {
  const resume = getAll().find((r) => r.documentId === id) || null;
  return Promise.resolve({ data: { data: resume } });
};

const DeleteResumeById = (id) => {
  saveAll(getAll().filter((r) => r.documentId !== id));
  return Promise.resolve({ data: {} });
};

export default {
  CreateNewResume,
  GetUserResumes,
  UpdateResumeDetail,
  GetResumeById,
  DeleteResumeById,
};
