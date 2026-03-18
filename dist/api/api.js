var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod";
export function getPets() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/pets`);
        if (!response.ok) {
            throw new Error("Failed to fetch pets");
        }
        const data = yield response.json();
        return data.data;
    });
}
export function getFeedback() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}/feedback`);
        if (!response.ok) {
            throw new Error("Failed to fetch feedback");
        }
        const data = yield response.json();
        return data.data;
    });
}
//# sourceMappingURL=api.js.map