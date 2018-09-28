import { Sample } from '../models/sample';

export const getSample = async (id) => {
    return Sample.findById(id);
};

export const createSample = async ({ title, content }) => {

    /*
     * TODO validation
     * if (타이틀이나 컨텐츠가 올바르지 않아) {
     *     throw new Error('글쓰기 실패')
     * }
     */

    return Sample.create({
        title,
        content,
    });
};
