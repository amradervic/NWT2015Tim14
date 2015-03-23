<?php
/* @var $this LogController */
/* @var $model Log */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'log-form',
	// Please note: When you enable ajax validation, make sure the corresponding
	// controller action is handling ajax validation correctly.
	// There is a call to performAjaxValidation() commented in generated controller code.
	// See class documentation of CActiveForm for details on this.
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'vrijemeLogiranja'); ?>
		<?php echo $form->textField($model,'vrijemeLogiranja'); ?>
		<?php echo $form->error($model,'vrijemeLogiranja'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'ipAdresa'); ?>
		<?php echo $form->textField($model,'ipAdresa',array('size'=>15,'maxlength'=>15)); ?>
		<?php echo $form->error($model,'ipAdresa'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'Korisnici_idKorisnik'); ?>
		<?php echo $form->textField($model,'Korisnici_idKorisnik',array('size'=>60,'maxlength'=>128)); ?>
		<?php echo $form->error($model,'Korisnici_idKorisnik'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->