import { AirRouter } from '@airpower/helper/AirRouter'

export class AppForm {
  static async getNumber(title = '请输入', desc = '请输入...', max = Number.MAX_SAFE_INTEGER, min = 0): Promise<number> {
    return (await AirRouter.go(`/component/form/NumberInput?title=${title}&desc=${desc}&max=${max}&min=${min}`, {}, 'fade-in', 200)) as number
  }
}
