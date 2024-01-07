import Flex from '~/abstract/flex'
import { Toast, addToast, store } from '~/abstract/toast'
import { updateToast } from '~/abstract/toast/container/actions'
import Spinner from '~/ui/spinner'
import { Id, generateId } from '~/utils/core'

/**
 * Вывести toast
 * TODO браться должен из ui где должный быть сужены типы тостов
 */
export function notify(props?: Partial<Toast>): void {
  if (props?.id && store.toasts[props?.id]) {
    updateToast(props as { id: Id })
  } else {
    addToast(props)
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createAsyncNotifier(): {
  onStart: typeof notify
  onSuccess: typeof notify
  onError: typeof notify
} {
  const id = generateId()

  return {
    onStart: (props?: Partial<Toast>): void => {
      notify({
        id,
        maxShowingTransition: Infinity,
        ...props,
        data: (
          <Flex height='0.7rem' width='100%' mainAxis='space-between'>
            {(props?.data as string) || 'Обновление'}
            <Spinner size='s' />
          </Flex>
        ),
      })
    },
    onSuccess: (props?: Partial<Toast>): void => {
      notify({
        id,
        data: 'Успешно',
        type: 'success',
        maxShowingTransition: 1000,
        showingTransition: 0,
        ...props,
      })
    },
    onError: (props?: Partial<Toast>): void => {
      notify({
        id,
        data: 'Ошибка',
        type: 'error',
        maxShowingTransition: 5000,
        showingTransition: 0,
        ...props,
      })
    },
  }
}
